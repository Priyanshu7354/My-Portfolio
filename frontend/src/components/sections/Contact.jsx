// src/components/sections/Contact.jsx (Updated to use props correctly)
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

export default function Contact({ emailForm, setEmailForm, handleChange, handleSubmit }) {
  const [copied, setCopied] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

     // ✅ BACKEND URL (fallback included)
    const API_URL =
      import.meta.env.VITE_API_URL ||
      "https://my-portfolio-golu.onrender.com";

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailForm),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form using prop
        setEmailForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeInWhenVisible>
      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className="
              bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col transition-all
              hover:shadow-xl
              hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]
              dark:hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]
              hover:-translate-y-1
            "
          >
            <h3 className="font-semibold mb-3 text-lg">Send a Message</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                name="name"
                value={emailForm.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
                required
                disabled={loading}
              />

              <input
                name="email"
                type="email"
                value={emailForm.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
                required
                disabled={loading}
              />

              <textarea
                name="message"
                value={emailForm.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
                required
                disabled={loading}
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">Message sent successfully! 🎉</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
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
            {/* Email */}
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <span className="font-semibold">pbhatnagar631@gmail.com</span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("pbhatnagar631@gmail.com", "email")
                }
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

            {/* Social Profiles */}
            <div className="space-y-4 mt-4">
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