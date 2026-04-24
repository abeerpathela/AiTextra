# 🤖 AiTextra — Turn Your Phone Number into an AI Chatbot

> **Convert your own mobile number into an AI assistant that replies via SMS.**

AiTextra is a system that allows your phone number to behave like an AI chatbot.
Anyone can send an SMS to your number, and your phone will automatically reply using AI.

<img width="540" height="1080" alt="image" src="https://github.com/user-attachments/assets/e48541ce-e675-461b-94d2-45d89594adb6" />

---

# 🌍 What This Project Actually Does

This project does **NOT give you a shared AI service**.

👉 Instead, it helps you build:

```text
YOUR PHONE NUMBER = YOUR PERSONAL AI BOT
```

* Your phone receives SMS
* Your backend processes it using AI
* Your phone sends back the reply

---

# ⚠️ IMPORTANT (READ BEFORE STARTING)

This is a **self-hosted system**.

👉 You MUST:

* Clone this repository
* Run your own backend
* Use your own API keys
* Connect your own phone

---

# 🧠 System Overview

```text
User sends SMS
   ↓
Your Phone (SimAPI App)
   ↓
Webhook → Your Backend
   ↓
AI (Gemini)
   ↓
SimAPI
   ↓
Your Phone sends reply
```

---

# 📦 Project Structure

```text
AiTextra/
│
├── backend/        ← 🔥 THIS IS THE MAIN PART
│   ├── index.js
│   ├── aiService.js
│   ├── smsService.js
│   ├── memoryService.js
│   └── package.json
│
└── mobile-app/     ← Android APK (SimAPI)
```

👉 Everything important is inside the **`backend/` folder**

---

# 🚀 Step-by-Step Setup

---

## 📥 STEP 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO/backend
```

---

## 📦 STEP 2 — Install Dependencies

```bash
npm install
```

---

## 🔐 STEP 3 — Create Your `.env` File

Inside the `backend/` folder, create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
SIMAPI_KEY=your_simapi_key
PORT=3000
```

---

### 🔑 Where to get keys?

* Gemini API → Google AI Studio
* SimAPI Key → SimAPI Dashboard

---

## ▶️ STEP 4 — Run Backend

```bash
node index.js
```

---

### Expected output:

```text
Server running on http://localhost:3000
```

---

## 🌐 STEP 5 — Expose Backend (for testing)

Use ngrok:

```bash
ngrok http 3000
```

Copy URL like:

```text
https://xxxxx.ngrok-free.dev
```

---

## 📱 STEP 6 — Install SimAPI App

👉 Download APK:

```text
https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.0/simapi.apk
```

---

## 🔐 STEP 7 — Give Permissions

Allow:

* Send SMS
* Read Phone State
* Internet
* Background activity

---

## 🔋 STEP 8 — Disable Battery Optimization (VERY IMPORTANT)

```text
Settings → Apps → SimAPI → Battery → Unrestricted
```

---

## 🔑 STEP 9 — Connect Your Phone

1. Open SimAPI app
2. Paste your API key
3. Click Connect

---

### ✅ Expected:

```text
Device Status: Online
```

---

## 📡 STEP 10 — Setup SMS Forwarding

Configure your SMS forwarder:

---

### Webhook URL:

```text
https://xxxxx.ngrok-free.dev/webhook
```

---

### JSON Payload:

```json
{
  "sender": "%from%",
  "text": "%text%"
}
```

---

### Headers:

```json
{
  "Content-Type": "application/json"
}
```

---

## 🧪 STEP 11 — Test

Send SMS to your phone:

```text
Hello AI
```

---

### 🎉 Expected Reply:

```text
Hello! How can I assist you today?
```

---

# 🚀 Deployment (Optional)

You can deploy backend on:

* Render
* Railway

After deployment:

```text
https://your-app.onrender.com/webhook
```

Replace ngrok URL in SMS forwarder.

---

# 🔐 How API Key Works

The API key connects:

```text
Your Phone ↔ Your SimAPI Backend
```

👉 Important:

* The backend uses YOUR API key
* Only YOUR phone will send SMS
* This is a **single-device AI bot**

---

# ⚠️ Common Mistakes

---

## ❌ Expecting it to work without cloning

This will NOT work.

👉 You must run your own backend.

---

## ❌ Wrong API key

Make sure:

```text
Same API key in:
- .env
- SimAPI app
```

---

## ❌ No SMS received

Check:

* Device online
* Permissions granted
* Battery unrestricted

---

## ❌ Slow response

Cause:

* ngrok delay
* free hosting cold start

---

# 🎯 Final Result

After setup:

```text
Your phone number becomes an AI chatbot
```

Anyone can message your number → AI replies.

---

# 💡 Use Cases

* Personal AI assistant
* Rural AI access
* Offline chatbot
* Emergency response systems

---

# 👨‍💻 Author

Abeer Pathela

---

# ⭐ Support

If this project helped you, give it a ⭐
