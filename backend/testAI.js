// ========================================
// Quick test for the AI Service
// Run: node testAI.js
// ========================================

const { getAIResponse } = require('./aiService');

async function test() {
  console.log('🧪 Testing Gemini AI Service...\n');

  const response = await getAIResponse('What is the capital of France?');
  console.log('\n✅ Test complete!');
  console.log(`📝 Response: ${response}`);
}

test();
