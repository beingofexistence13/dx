// Import the required modules
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

// Function to convert text to speech
export async function quickStart() {
  const client = new TextToSpeechClient();
  const request = {
    input: {text: 'Hello, world!'},
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await client.synthesizeSpeech(request);
  
  let progress = 0;
  const fileWriteStream = fs.createWriteStream('output.mp3');
  
  fileWriteStream.on('data', (chunk) => {
    progress += chunk.length;
    console.log(`Received ${progress} bytes of data.`);
  });

  fileWriteStream.on('finish', () => console.log('Audio content written to file: output.mp3'));

  fileWriteStream.write(response.audioContent, 'binary');
  fileWriteStream.end();
}

quickStart();
