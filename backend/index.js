// backend/index.js (Fully Corrected Backend)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();

/* =========================
   CORS CONFIG (VERY IMPORTANT)
========================= */
const allowedOrigins = [
  "http://localhost:5173",
  "https://my-portfolio-theta-sage-ubtwkt1bq9.vercel.app",
  "https://portfolio.priyanshu.dev"
];


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(express.json());

/* =========================
   Nodemailer Setup
========================= */
let transporter;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  transporter.verify((err) => {
    if (err) {
      console.error("❌ Email transporter error:", err.message);
    } else {
      console.log("✅ Email transporter ready");
    }
  });
} else {
  console.error("❌ EMAIL_USER or EMAIL_PASS missing—email disabled");
}

/* =========================
   ROUTES
========================= */

// Rate limiting for contact (5 reqs/15min per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many requests—try again later" }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", emailReady: !!transporter });
});

// Contact form
app.post("/api/contact", contactLimiter, async (req, res) => {
  // Null check for transporter
  if (!transporter) {
    return res.status(503).json({ error: "Email service unavailable" });
  }

  try {
    const { name, email, message } = req.body;

    // Basic sanitization & validation
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim();
    const cleanMessage = (message || '').trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '[Filtered Content]');

    if (!cleanName || !cleanEmail || !cleanMessage || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({ error: "Invalid or missing fields" });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: cleanEmail,
      subject: `New message from ${cleanName}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><b>Name:</b> ${cleanName}</p>
        <p><b>Email:</b> ${cleanEmail}</p>
        <p><b>Message:</b></p>
        <p>${cleanMessage}</p>
      `
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("❌ Full send error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});