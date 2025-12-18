// frontend/src/components/sections/Skills.jsx
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "HTML5",
          "CSS3",
          "JavaScript",
          "React",
          "Node.js",
          "MongoDB",
          "Tailwind",
          "Python",
          "Git/GitHub",
        ].map((skill) => (
          <div
            key={skill}
            className="
              p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex items-center gap-4 transition-all
              hover:shadow-xl
              hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
              dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
              hover:-translate-y-1
            "
          >
            <div className="w-12 h-12 bg-indigo-200 dark:bg-indigo-900 flex items-center justify-center rounded-md font-bold">
              {skill[0]}
            </div>
            <div>
              <div className="font-semibold">{skill}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Proficient
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}