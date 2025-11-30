from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import resume, recommend, jobs, users

app = FastAPI(title="AI Career Coach")

# ✅ Allow requests from your React/Next frontend (port 3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include backend API routes
app.include_router(resume.router)
app.include_router(recommend.router)
# app.include_router(jobs.router)
# app.include_router(users.router)

@app.get("/")
def root():
    return {"ok": True}
