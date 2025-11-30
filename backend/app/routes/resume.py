from fastapi import APIRouter, UploadFile, File, HTTPException
from ..db import db
from ..services.resume_parser import extract_text, extract_skills
import tempfile

router = APIRouter(prefix="/resume", tags=["resume"])

@router.post("/parse")
async def parse_resume(email: str, file: UploadFile = File(...)):
    # Validate email
    if not email:
        raise HTTPException(status_code=400, detail="Email is required")

    # Read uploaded file
    content = await file.read()

    # Create a temporary file for the resume (Windows-safe)
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
        temp_file.write(content)
        temp_path = temp_file.name  # Get actual file path

    try:
        # Extract text and detect skills
        text = extract_text(temp_path)
        skills = extract_skills(text)

        if not skills:
            raise HTTPException(status_code=400, detail="No skills found in the resume")

        # Update or insert user data in MongoDB
        db.users.update_one(
            {"email": email},
            {"$set": {"skills": skills}},
            upsert=True
        )

        return {"email": email, "skills": skills}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
