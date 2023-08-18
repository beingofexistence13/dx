// // Import the OpenAI library
// import { OpenAI, Language } from 'openai';

// // Initialize the OpenAI API with your API key
// const openai = new OpenAI({
//     apiKey: 'my api key', // defaults to process.env["OPENAI_API_KEY"]
//   });
// // Define a function to interact with the API
// async function generateText(prompt: string): Promise<string> {
//   try {
//     // Make a call to the API
//     const response = await openai.complete({
//       prompt,
//       max_tokens: 50, // Adjust as needed
//       temperature: 0.7, // Adjust as needed
//       stop: '\n', // Stop generation at newlines
//       language: Language.English, // Set the language
//     });

//     // Extract and return the generated text
//     return response.choices[0]?.text ?? '';
//   } catch (error) {
//     console.error('Error generating text:', error);
//     return '';
//   }
// }

// Export the function for use in your Next.js components or API routes
// export { generateText };
