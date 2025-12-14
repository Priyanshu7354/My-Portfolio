// frontend/src/components/sections/Education.jsx
import React from "react";

export default function Education() {
  return (
    <section id="education" className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="
        bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col transition-all
        hover:shadow-xl
        hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
        dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
        hover:-translate-y-1
      "
      >
        <div className="w-28 text-sm text-gray-500">2022–2026</div>
        <div>
          <h3 className="font-semibold text-lg">
            B.Tech — Computer Science & Engineering
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Sagar Group of Institutions — SISTec-R
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
            DSA, Algorithms, Web Development, DBMS
          </p>
        </div>
      </div>
    </section>
  );
}