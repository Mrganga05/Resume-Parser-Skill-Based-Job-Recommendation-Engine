from fastapi import APIRouter, HTTPException
from ..db import db
from ..services.recommender import score_job
from ..services.learning_plan import generate_learning_plan_gemini as gen_plan

router = APIRouter(prefix="/recommend", tags=["recommend"])

@router.get("/{email}")
def recommend(email: str, top_k: int = 5):
    user = db.users.find_one({"email": email})
    if not user:
        raise HTTPException(404, "User not found")
    recs = []
    for job in db.jobs.find({}):
        s, g = score_job(user, job)
        recs.append({
            "job_id": str(job["_id"]),
            "title": job["title"],
            "company": job["company"],
            "location": job["location"],
            "score": s,
            "coverage": g["coverage"],
            "missing_skills": g["missing"]
        })
    recs.sort(key=lambda x: (x["score"], x["coverage"]), reverse=True)
    top = recs[:top_k]
    plan = ""
    if top and top[0]["missing_skills"]:
        plan = gen_plan(user.get("skills", []), top[0]["missing_skills"], top[0]["title"])
    return {"user": email, "recommendations": top, "learning_plan": plan}
