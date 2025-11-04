const axios = require('axios');

async function generateNarration(text) {
  const response = await axios.post('https://api.openai.com/v1/completions', {
    prompt: `Narrate this podcast segment: ${text}`,
    model: 'text-davinci-003',
    max_tokens: 300
  }, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  return response.data.choices[0].text;
}

module.exports = generateNarration;
