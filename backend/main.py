
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import fitz
app = FastAPI()
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
    return {
    "filename": file.filename,
    "content_type": file.content_type,
    "pages": len(document),
    "text": text
}