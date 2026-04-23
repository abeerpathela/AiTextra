const axios = require('axios');
require('dotenv').config();

/**
 * Sends an SMS using the SimAPI service with detailed debugging logs.
 * @param {string} phoneNumber - The recipient's phone number.
 * @param {string} message - The content of the SMS.
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
async function sendSimAPISMS(phoneNumber, message) {
  if (!phoneNumber || !message) {
    console.error('❌ Validation Error: Missing phoneNumber or message');
    return { success: false, error: 'Missing phoneNumber or message' };
  }

  const API_KEY = process.env.SIMAPI_KEY ? process.env.SIMAPI_KEY.trim() : "";
  const url = 'https://simapi-tzyo.onrender.com/api/v1/send-sms';
  
  const payload = {
    to_number: phoneNumber,
    content: message,
  };

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  console.log('\n--- SimAPI Debug Request ---');
  console.log(`URL: ${url}`);
  console.log(`HEADERS: ${JSON.stringify({ ...headers, Authorization: 'Bearer [HIDDEN]' }, null, 2)}`);
  console.log(`BODY: ${JSON.stringify(payload, null, 2)}`);
  console.log('----------------------------\n');

  try {
    const response = await axios.post(url, payload, { headers });

    console.log('--- SimAPI Debug Response ---');
    console.log(`STATUS: ${response.status}`);
    console.log(`RESPONSE: ${JSON.stringify(response.data, null, 2)}`);
    console.log('-----------------------------\n');

    // Only log success if API confirms it
    if (response.status >= 200 && response.status < 300) {
      console.log(`✅ SimAPI SUCCESS: SMS accepted for ${phoneNumber}`);
      return { success: true, data: response.data };
    } else {
      console.error('❌ SimAPI FAILED: Unexpected status code');
      return { success: false, error: `Unexpected status code: ${response.status}` };
    }

  } catch (error) {
    console.error('\n❌ SimAPI FAILED');
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`STATUS: ${error.response.status}`);
      console.error(`ERROR: ${JSON.stringify(error.response.data, null, 2)}`);
      return { 
        success: false, 
        error: error.response.data, 
        status: error.response.status 
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.error('ERROR: No response received from SimAPI server');
      return { success: false, error: 'No response received from SimAPI' };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(`ERROR: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

module.exports = { sendSimAPISMS };
