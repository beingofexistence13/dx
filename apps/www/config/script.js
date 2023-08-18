document.addEventListener('DOMContentLoaded', function () {
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', async function () {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    displayMessage('You', userMessage);

    const assistantMessage = await getAssistantReply(userMessage);
    displayMessage('Assistant', assistantMessage);

    userInput.value = '';
  });

  async function getAssistantReply(userMessage) {
    const API_KEY = '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'; // Replace with your actual API key
    const API_URL = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  }

  function displayMessage(role, content) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', role.toLowerCase());
    messageElement.innerText = `${role}: ${content}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
