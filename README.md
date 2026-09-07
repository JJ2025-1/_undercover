# AI Tutor

A full-stack AI learning application.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Python
- FastAPI
- PyMuPDF
- Google Gemini API
- Git & GitHub

---

## ✅ Completed

- [x] Next.js frontend setup
- [x] FastAPI backend setup
- [x] Frontend ↔ backend connection
- [x] PDF file upload
- [x] CORS configuration
- [x] PDF text extraction using PyMuPDF
- [x] Gemini API integration
- [x] AI lesson generation
- [x] Display extracted PDF text
- [x] Display generated lesson
- [x] Markdown rendering
- [x] Basic upload UI
- [x] Git repository setup

---

## 🎯 Next 5 Goals

### 1. Structured AI Output
- [ ] Change Gemini response to structured JSON
- [ ] Define a consistent lesson schema
- [ ] Handle invalid AI responses

### 2. Better Lesson UI
- [ ] Separate lesson sections
- [ ] Improve typography and spacing
- [ ] Add cards/components
- [ ] Add loading and error states

### 3. Interactive Quiz
- [ ] Generate quiz data from Gemini
- [ ] Create clickable answer options
- [ ] Check answers
- [ ] Calculate score
- [ ] Show feedback

### 4. AI Tutor Interaction
- [ ] Add question input
- [ ] Send questions to FastAPI
- [ ] Give Gemini the relevant lesson context
- [ ] Display tutor responses
- [ ] Add follow-up questions

### 5. User Data & Persistence
- [ ] Add database
- [ ] Store uploaded lessons
- [ ] Store quiz results
- [ ] Add user progress
- [ ] Add authentication

---

## 🏗️ Current Architecture

```text
Next.js
   ↓
FastAPI
   ↓
PyMuPDF
   ↓
Extracted PDF Text
   ↓
Gemini
   ↓
AI Lesson
   ↓
Next.js UI
