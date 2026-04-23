// ========================================
// SMS AI Bot — Phase 5: Conversation Memory Service
// ========================================

const fs = require('fs');
const path = require('path');

const MEMORY_FILE = path.join(__dirname, 'conversations.json');

// Initialize memory from file or empty object
let conversations = {};

if (fs.existsSync(MEMORY_FILE)) {
  try {
    const data = fs.readFileSync(MEMORY_FILE, 'utf8');
    conversations = JSON.parse(data);
  } catch (error) {
    console.error('❌ Error reading memory file:', error.message);
    conversations = {};
  }
}

/**
 * Saves the current conversations to the JSON file.
 */
function saveMemory() {
  try {
    fs.writeFileSync(MEMORY_FILE, JSON.stringify(conversations, null, 2));
  } catch (error) {
    console.error('❌ Error saving memory file:', error.message);
  }
}

/**
 * Gets the conversation history for a specific sender.
 * @param {string} sender - The phone number of the sender.
 * @returns {Array} - Array of message objects { role, content }.
 */
function getHistory(sender) {
  return conversations[sender] || [];
}

/**
 * Adds a message to the conversation history.
 * @param {string} sender - The phone number of the sender.
 * @param {string} role - 'user' or 'assistant'.
 * @param {string} content - The message text.
 */
function addMessage(sender, role, content) {
  if (!conversations[sender]) {
    conversations[sender] = [];
  }

  // Add message
  conversations[sender].push({ role, content });

  // Keep only the last 10 messages to save space/context
  if (conversations[sender].length > 10) {
    conversations[sender] = conversations[sender].slice(-10);
  }

  saveMemory();
}

/**
 * Clears the history for a specific sender.
 * @param {string} sender 
 */
function clearHistory(sender) {
  delete conversations[sender];
  saveMemory();
}

module.exports = {
  getHistory,
  addMessage,
  clearHistory
};
