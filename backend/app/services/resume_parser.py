import pdfplumber, re
CANONICAL = {s.lower() for s in [
 "python","sql","pandas","numpy","machine learning","deep learning",
 "tensorflow","pytorch","nlp","react","node.js","docker","kubernetes",
 "statistics","power bi","tableau","spark","aws","azure","gcp"
]}

def extract_text(pdf_path)->str:
    text=""
    with pdfplumber.open(pdf_path) as pdf:
        for p in pdf.pages: text += "\n" + (p.extract_text() or "")
    return text.lower()

def extract_skills(text:str):
    found=set()
    for skill in CANONICAL:
        if re.search(rf"\b{re.escape(skill)}\b", text): found.add(skill.title())
    return sorted(found)
