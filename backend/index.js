require('dotenv').config();
const express = require('express');
const { getAIResponse } = require('./aiService');
const { sendSimAPISMS } = require('./smsService');
const memory = require('./memoryService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ──────────────────────────────────────────
// Health Check Route
// ──────────────────────────────────────────
app.get('/', (req, res) => {
  res.status(200).json({ status: 'running' });
});

// ──────────────────────────────────────────
// Webhook Route (Support for GET & POST)
// ──────────────────────────────────────────
const handleWebhook = (req, res) => {
  const sender = (req.body && req.body.sender) || req.query.from || req.query.sender;
  const text = (req.body && req.body.text) || req.query.text || req.query.message;

  if (!sender || !text) {
    return res.status(400).send("Missing data");
  }

  console.log(`📩 Webhook received from ${sender}`);
  res.status(200).send("OK");

  (async () => {
    try {
      const history = memory.getHistory(sender);
      const aiResponse = await getAIResponse(text, history);

      memory.addMessage(sender, 'user', text);
      memory.addMessage(sender, 'assistant', aiResponse);

      const smsResult = await sendSimAPISMS(sender, aiResponse);
      if (smsResult.success) {
        console.log(`✅ SMS sent to ${sender}`);
      } else {
        console.error(`❌ SMS failed for ${sender}:`, smsResult.error);
      }
    } catch (error) {
      console.error("❌ Background processing error:", error.message);
    }
  })();
};

app.get('/webhook', handleWebhook);
app.post('/webhook', handleWebhook);

// ──────────────────────────────────────────
// Developer Testing Route
// ──────────────────────────────────────────
app.post('/test', async (req, res) => {
  const { sender, text } = req.body;
  if (!sender || !text) {
    return res.status(400).json({ success: false, error: 'Missing sender or text' });
  }

  try {
    const history = memory.getHistory(sender);
    const aiResponse = await getAIResponse(text, history);

    memory.addMessage(sender, 'user', text);
    memory.addMessage(sender, 'assistant', aiResponse);

    const smsResult = await sendSimAPISMS(sender, aiResponse);

    res.json({
      success: true,
      aiResponse,
      history: memory.getHistory(sender),
      smsStatus: smsResult.success ? 'sent' : 'failed',
      smsDetails: smsResult.data || smsResult.error
    });
  } catch (error) {
    console.error('❌ Test Route Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
