"use client";
import {useState} from "react";
export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">AI Tutor</h1>

        <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800">
          Sign In
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium text-blue-400">
          AI-POWERED LEARNING
        </p>

        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Turn your study material
          <br />
          into an interactive lesson.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Upload your PDF, PowerPoint, or Word document.
          AI Tutor transforms it into structured explanations,
          visuals, questions, and interactive learning content.
        </p>

        {/* Upload area */}
        <div className="mt-10 w-full max-w-xl rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-10">
          <div className="text-4xl">📄</div>

          <h3 className="mt-4 text-xl font-semibold">
            Upload your study material
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            PDF, PPTX, or DOCX
          </p>

          <label className="mt-6 inline-block cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-zinc-200">
  Choose File

  <input
    type="file"
    accept=".pdf,.pptx,.docx"
    className="hidden"
    onChange = {(event) => {
      const selectedFile = event.target.files?.[0] || null;
      if (selectedFile) {
        setFile(selectedFile);

      }
    }}
  />
</label>
      {file && (
  <p className="mt-4 text-sm text-green-400">
    Selected: {file.name}
  </p>
)}
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Your material will be analyzed and converted into a lesson.
        </p>
      </section>
    </main>
  );
}