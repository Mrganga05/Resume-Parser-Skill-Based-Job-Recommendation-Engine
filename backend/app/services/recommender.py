from sentence_transformers import SentenceTransformer, util

_model = None

def get_model():
    global _model
    if _model is None:
        _model = SentenceTransformer("all-MiniLM-L6-v2")  # semantic model
    return _model

def semantic(user_skills, job_skills):
    if not user_skills or not job_skills:
        return 0.0
    model = get_model()
    a = model.encode(" ".join(user_skills), normalize_embeddings=True)
    b = model.encode(" ".join(job_skills), normalize_embeddings=True)
    sim = float(util.cos_sim(a, b).item())
    return (sim + 1) / 2

def skill_gap(user_skills, job_skills):
    u = set([s.lower() for s in (user_skills or [])])
    j = set([s.lower() for s in (job_skills or [])])
    missing = sorted(list(j - u))
    overlap = sorted(list(j & u))
    coverage = round(len(overlap) / len(j), 2) if j else 0.0
    return {"missing": missing, "overlap": overlap, "coverage": coverage}

def score_job(user, job):
    sim = semantic(user.get("skills", []), job.get("required_skills", []))
    loc = 1.0 if user.get("location", "").lower() == job.get("location", "").lower() else 0.5
    exp = 1.0 if user.get("experience", 0) >= job.get("experience_required", 0) else 0.3
    total = round(0.6 * sim + 0.25 * loc + 0.15 * exp, 3)
    gap = skill_gap(user.get("skills", []), job.get("required_skills", []))
    return total, gap
