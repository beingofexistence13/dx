import fs from 'fs';
import { get } from 'https';
import path from 'path';

const download = (url, filePath, callback) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  get(url, (res) => {
    const fileStream = fs.createWriteStream(filePath);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close(callback);
    });
  });
}

const url = 'https://images.unsplash.com/photo-1606787947360-4181fe0ab58c';
const filePath = 'image.jpg';

download(url, filePath, () => {
  console.log('Image downloaded!');
});
