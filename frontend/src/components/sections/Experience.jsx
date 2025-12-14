// frontend/src/components/sections/Experience.jsx
import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="
        bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col transition-all
        hover:shadow-xl
        hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
        dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
        hover:-translate-y-1
      ">
        <div className="w-28 text-sm text-gray-500">
          Jan 2025 – Feb 2025
        </div>
        <div>
          <h3 className="font-semibold text-lg">
            Full-Stack Intern — Talenvy (Remote)
          </h3>
          <ul className="list-disc ml-5 mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>Developed modern responsive React pages.</li>
            <li>Implemented MERN stack components.</li>
            <li>Worked in agile environment.</li>
            <li>Used Git/GitHub for version control.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}