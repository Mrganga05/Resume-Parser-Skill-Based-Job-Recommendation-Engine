from ..config import GEMINI_API_KEY

def generate_learning_plan_gemini(user_skills, missing_skills, role):
    if not GEMINI_API_KEY or not missing_skills:
        return "Learning plan not available — missing API key or skills."

    try:
        import google.generativeai as genai
        genai.configure(api_key=GEMINI_API_KEY)

        # ✅ Use your working model (from list_models)
        model = genai.GenerativeModel("models/gemini-2.5-pro")

        prompt = f"""
        You are an experienced AI Career Coach.
        User skills: {', '.join(user_skills)}
        Missing skills: {', '.join(missing_skills)}
        Target role: {role}

        Generate a clear, actionable 3-step learning plan to help the user fill the skill gap.
        - Include free or popular resources (like Coursera, Kaggle, Hugging Face, YouTube, etc.)
        - Be concise (3-5 lines)
        """

        response = model.generate_content(prompt)
        return response.text.strip() if hasattr(response, "text") else str(response)

    except Exception as e:
        return f"⚠️ Gemini API error: {e}"
