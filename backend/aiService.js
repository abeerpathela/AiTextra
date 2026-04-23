const axios = require('axios');
require('dotenv').config();

async function getAIResponse(userMessage, history = []) {
  try {
    const messages = [
      {
        role: 'system',
        content: 'Respond in 2 sentences or less. Be concise and friendly.',
      },
      ...history,
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('❌ OpenRouter Error:', error.response ? error.response.data : error.message);
    return 'AI is currently unavailable. Please try again later.';
  }
}

module.exports = { getAIResponse };
