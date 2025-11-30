# backend/app/config.py
import os
from dotenv import load_dotenv
load_dotenv()

# Database
MONGO_URI = os.getenv("MONGO_URI", "")  # must provide or fallback to local
DB_NAME = os.getenv("DB_NAME", "career_coach")

# Security / keys
JWT_SECRET = os.getenv("JWT_SECRET") or ""  # generate and set in .env for prod
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")  # optional

# Helpers for debug
def require_env(varname: str):
    v = os.getenv(varname)
    if not v:
        return None
    return v
