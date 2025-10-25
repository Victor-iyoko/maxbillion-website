import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const SCRIPT_URL = process.env.SCRIPT_URL;

// 🔹 POST endpoint for subscribing
app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    // Forward the request to your Apps Script web app
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error communicating with Apps Script:", error);
    res
      .status(500)
      .json({ message: "Error forwarding to Google Script", error: error.message });
  }
});

// Optional: health check
app.get("/", (req, res) => res.send("Server running ✔️"));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
