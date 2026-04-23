# 🤖 AiTextra — AI over SMS (No Internet Required)

> **AI for the next billion users — accessible through a single SMS.**

AiTextra is an AI-powered SMS chatbot that allows anyone to interact with a Large Language Model using simple text messages — no smartphone, app, or internet connection required.

---

## 🌍 Problem

Most AI tools today require:

* Internet access
* Smartphones
* Apps or browsers

This excludes millions of users in rural and low-connectivity regions.

---

## 💡 Solution

AiTextra bridges this gap by enabling:

📱 **Any phone → SMS → AI → SMS reply**

Users simply send a message to a phone number and receive intelligent AI responses instantly.

---

## ⚙️ How It Works

1. User sends an SMS
2. Android SMS Forwarder captures the message
3. Webhook sends data to backend server
4. Backend processes request using AI
5. Response is sent via SMS API
6. User receives AI reply

---

## 🧠 Tech Stack

* **Backend:** Node.js, Express
* **AI:** Google Gemini API
* **SMS Delivery:** SimAPI
* **Trigger:** Android SMS Forwarder
* **Deployment:** Render (or any cloud platform)

---

## 🚀 Features

* 📩 Works on basic phones (no internet required)
* ⚡ Real-time AI responses via SMS
* 🧠 Context-aware conversations (memory support)
* 🌐 Cloud-deployable backend
* 🔐 Secure API key management with environment variables

---

## 🧪 Example Flow

**User:**

```text
Hello AI
```

**AI Reply:**

```text
Hello! How can I assist you today?
```

---

## 📦 Project Structure

```text
backend/
├── index.js          # Main server & webhook routes
├── aiService.js      # Gemini AI integration
├── smsService.js     # SimAPI SMS service
├── memoryService.js  # Conversation memory
├── .env              # Environment variables (not committed)
├── package.json
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_key
SIMAPI_KEY=your_simapi_key
PORT=3000
```

---

## ▶️ Run Locally

```bash
npm install
node index.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🌐 Deployment

This project can be deployed on platforms like:

* Render
* Railway
* VPS / Cloud servers

After deployment, update your SMS Forwarder webhook URL:

```
https://your-app.onrender.com/webhook
```

---

## 🔥 Use Cases

* Rural AI access
* Emergency information systems
* Agriculture & healthcare assistance
* Offline-first AI solutions

---

## 📌 Future Improvements

* 🌍 Multi-language support
* 🎯 Specialized AI roles (doctor, tutor, finance)
* 🔐 Rate limiting & authentication
* 📊 Analytics dashboard

---

## 🏁 Status

✅ Fully working end-to-end system
🚀 Ready for deployment and scaling

---

## 👨‍💻 Author

**Abeer Pathela**

---

## ⭐ Support

If you found this project useful, consider giving it a star ⭐
