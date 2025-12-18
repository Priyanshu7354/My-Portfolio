import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <FadeInWhenVisible delay={0.4}>
      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info (Expanded) */}
          <div
            className="
              p-6 bg-gradient-to-tr from-white to-indigo-50
              dark:from-gray-800 dark:to-gray-800
              rounded-xl shadow flex flex-col gap-5 transition-all
              hover:shadow-xl
              hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
              dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
              hover:-translate-y-1
            "
          >
            <h3 className="font-semibold mb-4 text-lg">Let's Connect!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities, creative ideas, or just chatting about tech. Reach out below!
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <span className="font-semibold">pbhatnagar631@gmail.com</span>
              </div>
              <button
                onClick={() => copyToClipboard("pbhatnagar631@gmail.com", "email")}
                className="text-indigo-500 hover:scale-110 transition"
                aria-label="Copy Email"
              >
                {copied === "email" ? <FaCheck className="text-green-500" /> : <FaCopy />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-500" />
                <span className="font-semibold">+91 7354352931</span>
              </div>
              <button
                onClick={() => copyToClipboard("+917354352931", "phone")}
                className="text-indigo-500 hover:scale-110 transition"
                aria-label="Copy Phone"
              >
                {copied === "phone" ? <FaCheck className="text-green-500" /> : <FaCopy />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span className="font-semibold">Bhopal, India</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-all hover:shadow-xl hover:-translate-y-1">
            <h3 className="font-semibold mb-4 text-lg">Follow Me</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/Priyanshu7354"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center justify-between
                  p-4 rounded-xl border border-gray-200 dark:border-gray-700
                  bg-white dark:bg-gray-800
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]
                  dark:hover:drop-shadow-[0_0_18px_rgba(129,140,248,0.6)]
                "
              >
                <div className="flex items-center gap-4">
                  <FaGithub className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition" />
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-gray-500">
                      View my open-source projects
                    </div>
                  </div>
                </div>
                <span className="text-sm text-indigo-500 opacity-0 group-hover:opacity-100 transition">
                  Visit →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/priyanshu-bhatnagar45/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center justify-between
                  p-4 rounded-xl border border-gray-200 dark:border-gray-700
                  bg-white dark:bg-gray-800
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]
                  dark:hover:drop-shadow-[0_0_18px_rgba(129,140,248,0.6)]
                "
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-2xl text-blue-600 group-hover:text-indigo-500 transition" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-gray-500">
                      Connect with me professionally
                    </div>
                  </div>
                </div>
                <span className="text-sm text-indigo-500 opacity-0 group-hover:opacity-100 transition">
                  View →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}