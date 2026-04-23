// ========================================
// SMS AI Bot — Phase 1: Base Express Server
// ========================================

const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies (Twilio sends data this way)
app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON bodies
app.use(express.json());

// ──────────────────────────────────────────
// Health Check Route
// ──────────────────────────────────────────
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'running',
    message: '🤖 SMS AI Bot server is alive!',
    timestamp: new Date().toISOString(),
  });
});

// ──────────────────────────────────────────
// Start Server
// ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/\n`);
});
