from google import genai
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import fitz
app = FastAPI()
client = genai.Client()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Tutor backend is running"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()

    document = fitz.open(stream=contents, filetype="pdf")

    text = ""

    for page in document:
        text += page.get_text()
        response = client.models.generate_content(
    model="gemini-3.6-flash",
    contents=f"""
You are an AI tutor.

Analyze the following study material and create a beginner-friendly lesson.

Include:
1. Topic
2. Simple explanation
3. Important concepts
4. Example
5. 3 quiz questions

Study material:
{text}
"""
)
    return {
    "filename": file.filename,
    "pages": len(document),
    "text": text,
    "lesson": response.text
}