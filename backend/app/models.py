# backend/app/models.py
from datetime import datetime

def now_iso(): return datetime.utcnow().isoformat()

# backend/app/seed.py
from .db import db
db.jobs.drop(); db.users.drop()

db.jobs.insert_many([
  {"title":"Data Scientist","company":"TechCorp",
   "required_skills":["Python","Machine Learning","Statistics","SQL"],
   "experience_required":1,"location":"Hyderabad",
   "description":"Build ML pipelines"},
  {"title":"ML Engineer","company":"AIWorks",
   "required_skills":["Python","TensorFlow","MLOps","Docker"],
   "experience_required":2,"location":"Chennai",
   "description":"Deploy models"}
])

db.users.insert_one({
  "name":"Demo User","email":"user@example.com",
  "skills":["Python","SQL","Pandas"],"experience":1,"location":"Hyderabad"
})

print("Seeded.")
