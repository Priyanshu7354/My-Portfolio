// frontend/src/components/sections/Hero.jsx
import React from "react";

export default function Hero({ profilePic, dark }) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center pt-12">
      <div className="space-y-6">
        <p className="text-indigo-500 font-medium">
          Hello, I'm Priyanshu 👋
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          I build modern & delightful web experiences.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
          MERN Stack Developer focusing on clean UI, responsive layouts,
          and smooth interactions.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div
        className="
          rounded-2xl bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-6 shadow-xl transition-all
          hover:shadow-2xl
          hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
          dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
          hover:-translate-y-1
        "
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-72 object-cover rounded-xl shadow-lg"
        />
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div
            className="
              p-3 bg-white dark:bg-gray-900 rounded-lg shadow transition-all
              hover:shadow-xl
              hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]
              dark:hover:drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]
              hover:-translate-y-0.5
            "
          >
            <div className="text-xs text-gray-500">Role</div>
            <div className="font-semibold">Full Stack Developer</div>
          </div>
          <div
            className="
              p-3 bg-white dark:bg-gray-900 rounded-lg shadow transition-all
              hover:shadow-xl
              hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]
              dark:hover:drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]
              hover:-translate-y-0.5
            "
          >
            <div className="text-xs text-gray-500">Location</div>
            <div className="font-semibold">Bhopal, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}