require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();

/* =======================
   Middleware
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   MongoDB (optional)
======================= */
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB error:", err.message));
}

/* =======================
   Nodemailer
======================= */
const transporter = nodemailer.createTransport({
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

/* =======================
   Routes
======================= */

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("❌ Send error:", err.message);
    res.status(500).json({ error: "Failed to send message" });
  }
});

/* =======================
   Start Server
======================= */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
