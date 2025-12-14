// frontend/src/components/sections/Projects.jsx
import React from "react";
import TiltCard from "../animations/TiltCard";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

export default function Projects({ projectsData, setActiveProject }) {
  return (
    <section id="projects" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projectsData.map((p, i) => (
          <FadeInWhenVisible key={p.id} delay={i * 0.1}>
            <TiltCard>
              <article
                onClick={() => setActiveProject(p)}
                className="
                  cursor-pointer
                  bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col transition-all
                  hover:shadow-xl
                  hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
                  dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
                  hover:-translate-y-1
                "
              >
                <div className="h-36 rounded-md bg-gradient-to-br from-sky-200 to-indigo-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center font-semibold">
                  {p.title}
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {p.description}
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-indigo-500 text-sm">
                  Click to view details →
                </div>
              </article>
            </TiltCard>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}