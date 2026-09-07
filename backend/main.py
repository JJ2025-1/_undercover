import json
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

Analyze the study material and return a beginner-friendly lesson.

Return ONLY valid JSON.

Use exactly this structure:

{{
    "title": "Lesson title",
    "summary": "Simple explanation of the topic",
    "concepts": [
        "Important concept 1",
        "Important concept 2"
    ],
    "examples": [
        "Example 1",
        "Example 2"
    ],
    "quiz": [
        {{
            "question": "Question text",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Correct option"
        }}
    ]
}}

Do not use Markdown.
Do not use code fences.
Do not add any text outside the JSON.

Study material:
{text}
"""
    )

    return {
        "filename": file.filename,
        "pages": len(document),
        "text": text,
        "lesson": json.loads(response.text)
    }