// import React, { useState } from 'react';
// import { generateText } from './path-to-your-api-file'; // Adjust the path

// interface ChatMessage {
//   text: string;
//   isUser: boolean;
// }

// const ChatInterface: React.FC = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputText(event.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (inputText.trim() === '') return;

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: inputText, isUser: true },
//     ]);

//     const generatedText = await generateText(inputText);
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: generatedText, isUser: false },
//     ]);

//     setInputText('');
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`chat-message ${message.isUser ? 'user' : 'bot'}`}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={inputText}
//           onChange={handleInputChange}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatInterface;
