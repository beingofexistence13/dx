// script.js
const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

const generateButton = document.getElementById('generateButton');
const generatedTextElement = document.getElementById('generatedText');

generateButton.addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;
  const generatedText = await generateText(prompt);
  generatedTextElement.textContent = generatedText;
});

async function generateText(prompt) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  const data = {
    prompt: prompt,
    max_tokens: 50,
    temperature: 0.7,
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData.choices[0].text;
  } catch (error) {
    console.error('Error generating text:', error);
    return 'Error generating text.';
  }
}
