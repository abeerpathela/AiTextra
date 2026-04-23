const axios = require('axios');
require('dotenv').config();

async function sendSimAPISMS(phoneNumber, message) {
  if (!phoneNumber || !message) {
    return { success: false, error: 'Missing phoneNumber or message' };
  }

  const API_KEY = process.env.SIMAPI_KEY ? process.env.SIMAPI_KEY.trim() : "";
  const url = 'https://simapi-tzyo.onrender.com/api/v1/send-sms';
  
  try {
    const response = await axios.post(
      url,
      {
        to_number: phoneNumber,
        content: message,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    const errorData = error.response ? error.response.data : error.message;
    console.error('❌ SimAPI Error:', errorData);
    return { success: false, error: errorData };
  }
}

module.exports = { sendSimAPISMS };
