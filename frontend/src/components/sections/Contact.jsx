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

export default function Contact({ emailForm, setEmailForm, handleChange }) {
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

    // ✅ Backend URL from environment
    const API_URL = import.meta.env.VITE_API_URL;

    if (!API_URL) {
      console.error("VITE_API_URL is not defined");
      setSubmitStatus("error");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailForm),
      });

      // Safely parse JSON
      let data = {};
      try {
        data = await response.json();
      } catch {
        data = { message: "Invalid server response" };
      }

      if (response.ok) {
        setSubmitStatus("success");
        setEmailForm({ name: "", email: "", message: "" });
      } else {
        console.error("Server error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
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
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3 text-lg">Send a Message</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                name="name"
                value={emailForm.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded border"
                required
                disabled={loading}
              />

              <input
                name="email"
                type="email"
                value={emailForm.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded border"
                required
                disabled={loading}
              />

              <textarea
                name="message"
                value={emailForm.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 rounded border"
                required
                disabled={loading}
              />

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-sm">
                  Message sent successfully 🎉
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm">
                  Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-indigo-500" />
                <span className="font-semibold">
                  pbhatnagar631@gmail.com
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("pbhatnagar631@gmail.com", "email")
                }
              >
                {copied === "email" ? <FaCheck /> : <FaCopy />}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-indigo-500" />
                <span className="font-semibold">+91 7354352931</span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("+91 7354352931", "phone")
                }
              >
                {copied === "phone" ? <FaCheck /> : <FaCopy />}
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span className="font-semibold">Bhopal, India</span>
            </div>

            <a
              href="https://github.com/Priyanshu7354"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-bhatnagar45/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
