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

  // ================= COPY TO CLIPBOARD (SAFE + FALLBACK) =================
  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const copyToClipboard = async (text, type) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy(text);
      }
      setCopied(type);
      setTimeout(() => setCopied(""), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeVzjNGDDVK5r429V9iVxlhTxsx6kzG4yfieYwZKiRhGswMow/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <FadeInWhenVisible delay={0.4}>
      <section id="contact" className="mt-24 space-y-20">

        {/* ================= HEADING ================= */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Interested in working together or just want to say hello?
          </p>
        </div>

        {/* ================= CONTACT + CTA ================= */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* -------- Contact Information Card -------- */}
          <div
            className="
              p-6 bg-white dark:bg-gray-800
              border dark:border-gray-700
              rounded-lg shadow
              transition-all duration-300
              hover:shadow-xl
              hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
              dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
              hover:-translate-y-1
            "
          >
            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-indigo-500" />
                  <span className="font-medium">
                    pbhatnagar631@gmail.com
                  </span>
                </div>
                <button
                  aria-label="Copy email"
                  title="Copy email"
                  onClick={() =>
                    copyToClipboard("pbhatnagar631@gmail.com", "email")
                  }
                  className="transition hover:scale-110"
                >
                  {copied === "email" ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaCopy className="text-indigo-500" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-indigo-500" />
                  <span className="font-medium">
                    +91 7354352931
                  </span>
                </div>
                <button
                  aria-label="Copy phone number"
                  title="Copy phone number"
                  onClick={() =>
                    copyToClipboard("+917354352931", "phone")
                  }
                  className="transition hover:scale-110"
                >
                  {copied === "phone" ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaCopy className="text-indigo-500" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-indigo-500" />
                  <span className="font-medium">
                    Bhopal, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* -------- CTA Card -------- */}
          <div
            className="
              p-10 rounded-2xl
              bg-gradient-to-br from-indigo-600 to-indigo-500
              text-white text-center
              border border-white/10
              shadow transition-all duration-300
              hover:shadow-xl
              hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
              dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
              hover:-translate-y-1
              flex flex-col justify-center items-center
            "
          >
            <h3 className="text-2xl font-semibold mb-4">
              Send Me a Message
            </h3>
            <p className="text-indigo-100 max-w-sm mb-8">
              Use my contact form and I’ll respond as soon as possible.
            </p>

            <button
              onClick={openGoogleForm}
              className="
                px-10 py-4 bg-white text-indigo-600
                font-semibold rounded-xl
                shadow-lg hover:scale-105
                transition-all duration-300
              "
            >
              Open Contact Form
            </button>

            <span className="text-xs text-indigo-200 mt-4">
              Redirects to Google Forms
            </span>
          </div>
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6">
            Connect With Me
          </h3>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/Priyanshu7354"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 p-6
                bg-white dark:bg-gray-800
                border dark:border-gray-700 rounded-lg
                shadow transition-all duration-300
                hover:shadow-xl
                hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
                dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
                hover:-translate-y-1
              "
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-bhatnagar45/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3 p-6
                bg-white dark:bg-gray-800
                border dark:border-gray-700 rounded-lg
                shadow transition-all duration-300
                hover:shadow-xl
                hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
                dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
                hover:-translate-y-1
              "
            >
              <FaLinkedin className="text-xl text-blue-600" />
              LinkedIn
            </a>
          </div>
        </div>

      </section>
    </FadeInWhenVisible>
  );
}
