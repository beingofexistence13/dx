// Import the required modules
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';
import progressStream from 'progress-stream';

console.log("Sumon, I donot what is taking so much long");

// Function to convert text to speech
export async function quickStart() {
  const client = new TextToSpeechClient();
  const request = {
    input: {text: 'Hello, world!'},
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await client.synthesizeSpeech(request);
  
  const progress = progressStream({
    length: response.audioContent.length,
    time: 100 /* ms */
  });

  progress.on('progress', (progress) => {
    console.log(progress);
  });

  const fileWriteStream = fs.createWriteStream('output.mp3');
  
  fileWriteStream.on('finish', () => console.log('Audio content written to file: output.mp3'));

  progress.pipe(fileWriteStream).end(response.audioContent);
}

quickStart();
