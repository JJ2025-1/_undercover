// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
// export default function Home() { 
//     return ( 
//       <div>
//       <h1 className="text-4xl font-bold"> AI Tutor </h1>
//       <p> Turn your study materials into interactive lessons. </p>
//       <button> Upload Pdf</button>
//       </div>
//     );
// }
export default function Home() {
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
  />
</label>
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Your material will be analyzed and converted into a lesson.
        </p>
      </section>
    </main>
  );
}