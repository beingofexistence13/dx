import fs from 'fs';
import { get } from 'https';

const download = (url, path, callback) => {
  get(url, (res) => {
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close(callback);
    });
  });
}

const url = 'https://images.unsplash.com/photo-1606787947360-4181fe0ab58c';
const path = '/path/to/save/image.jpg';

download(url, path, () => {
  console.log('Image downloaded!');
});
