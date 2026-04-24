# 🤖 AiTextra — Turn Your Phone Number into an AI Chatbot

> **What if your phone number itself could think, reply, and assist like ChatGPT — using just SMS?**

AiTextra transforms a normal mobile number into a fully functional AI chatbot.
Anyone can send an SMS to your number and receive intelligent AI responses — without needing internet, apps, or smartphones.

<img width="540" height="1080" alt="image" src="https://github.com/user-attachments/assets/e48541ce-e675-461b-94d2-45d89594adb6" />


---

# 🌍 The Big Idea

Most AI tools today are limited to:

* Smartphones
* Internet access
* Apps or browsers

But billions of people still rely on **basic phones and SMS**.

👉 AiTextra solves this by bringing AI to the **most universal communication layer: SMS**

---

# 🔥 What This Project Does

```text
Your Phone Number = AI Assistant
```

* A user sends an SMS
* Your system processes it using AI
* A reply is sent back instantly

---

# 🧠 How It Works (Concept)

```text
User (Any Phone)
   ↓ SMS
Your Phone (SimAPI App)
   ↓
Cloud Backend (AI Processing)
   ↓
SimAPI Gateway
   ↓
Your Phone (sends reply)
   ↓ SMS
User receives AI response
```

---

# ⚙️ Architecture Breakdown

### 📱 1. Your Phone

* Receives SMS
* Sends data to backend
* Sends AI reply back

---

### 🌐 2. Backend Server

* Receives incoming messages
* Sends them to AI (Gemini)
* Returns response

---

### 📡 3. SimAPI

* Acts as a bridge between backend and phone
* Enables sending SMS programmatically

---

### 🤖 4. AI Model

* Generates short, intelligent responses
* Optimized for SMS (concise replies)

---

# 🚀 What Makes This Powerful

* 📩 Works on **any phone (even keypad phones)**
* 🌐 No internet required for user
* 💰 Zero cost messaging system (your SIM)
* ⚡ Real-world deployable system
* 🌍 Scalable to rural / offline areas

---

# 📱 Complete Setup Guide

Follow this carefully — do NOT skip steps.

---

## 📥 STEP 1 — Download Android App

👉 Download APK:

```text
[SimAPI](https://bit.ly/4eFsI6c)
```

---

## 📲 STEP 2 — Install App

1. Open APK
2. Enable “Install Unknown Apps”
3. Turn off the play protect from the google play store settings
4. Install

---

## 🔐 STEP 3 — Grant Permissions

Allow ALL:

* Send SMS
* Read Phone State
* Receive SMS
* Internet

---

## 🔋 STEP 4 — Disable Battery Restrictions

Go to:

Settings → Apps → SimAPI → Battery

Set:

* Unrestricted
* Allow background activity

👉 This is CRITICAL

---

## 🌐 STEP 5 — Open Dashboard

```text
https://sim-api-one.vercel.app
```

---

## 🔑 STEP 6 — Get API Key

Copy:

```text
sim_live_xxxxxxxxxxxxxx
```

## 🔐 Important: How API Key Works

This project is designed to convert **your own phone number into an AI chatbot**.

The API key is used to connect your phone (via the SimAPI app) to the backend system.

⚠️ Note:
- The backend uses a fixed API key.
- Only the connected device will send SMS replies.
- This is a single-device AI bot system.

If you want multi-user support, the backend must be modified to accept dynamic API keys

---

## 📲 STEP 7 — Connect Phone

1. Open SimAPI app
2. Paste API key
3. Tap Connect

---

### ✅ Expected:

```text
Device Status: Online
```

---

## 🌐 STEP 8 — Backend

Your backend:

```text
https://aitextra.onrender.com
```

---

## 📡 STEP 9 — Configure SMS Forwarder

### Webhook:

```text
https://aitextra.onrender.com/webhook
```

---

### Payload:

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

## 🧪 STEP 10 — Test

Send SMS:

```text
Hello AI
```

---

### 🎉 Expected:

```text
Hello! How can I assist you today?
```

---

# 🚨 Common Issues & Fixes

---

## ❌ No reply

Check:

* Device is ONLINE
* Internet ON
* Permissions granted

---

## ❌ "Dispatched but no SMS"

Meaning:

```text
Backend OK → Phone not sending
```

Fix:

* Reconnect device
* Restart app
* Check SMS permission

---

## ❌ Works once then stops

Cause:

```text
Android killed background app
```

Fix:

* Disable battery optimization
* Keep app open

---

## ❌ Slow responses

Cause:

* Free hosting cold start
* AI latency

---

# 🎯 Final Result

After setup:

```text
Your phone becomes an AI chatbot
```

Anyone can:

* Send SMS
* Get AI response instantly

---

# 💡 Real-World Use Cases

* Rural AI assistant
* Agriculture help
* Healthcare guidance
* Emergency systems
* Offline AI education

---

# 🏁 Status

✅ Fully working system
🚀 Deployed and functional
⚡ Ready for scaling

---

# 👨‍💻 Author

Abeer Pathela

---

# ⭐ Support

If you found this project useful, give it a ⭐
