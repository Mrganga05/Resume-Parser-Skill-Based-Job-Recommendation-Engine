from app.db import db

# Drop old data
db.jobs.drop()

# Insert some AI/ML jobs
db.jobs.insert_many([
    {
        "title": "Data Scientist",
        "company": "TechCorp",
        "required_skills": ["Python", "Machine Learning", "Statistics", "SQL"],
        "experience_required": 1,
        "location": "Hyderabad",
        "description": "Work on predictive models and business insights."
    },
    {
        "title": "ML Engineer",
        "company": "AIWorks",
        "required_skills": ["Python", "TensorFlow", "Docker", "MLOps"],
        "experience_required": 2,
        "location": "Chennai",
        "description": "Build and deploy scalable machine learning pipelines."
    },
    {
        "title": "NLP Engineer",
        "company": "VoiceAI",
        "required_skills": ["Python", "NLP", "Transformers", "PyTorch"],
        "experience_required": 1,
        "location": "Hyderabad",
        "description": "Develop AI models for chatbots and virtual assistants."
    },
    {
        "title": "Data Analyst",
        "company": "DataWiz",
        "required_skills": ["Python", "Power BI", "SQL", "Statistics"],
        "experience_required": 0,
        "location": "Bangalore",
        "description": "Analyze datasets and visualize business metrics."
    },
    {
        "title": "AI Research Intern",
        "company": "DeepMind India",
        "required_skills": ["Python", "Deep Learning", "PyTorch", "Numpy"],
        "experience_required": 0,
        "location": "Remote",
        "description": "Research and prototype new deep learning architectures."
    }
])

print("✅ Jobs seeded successfully!")
