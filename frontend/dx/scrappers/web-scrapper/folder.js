import fs from 'fs';
import path from 'path';

const filePath =  chmod -R;
const fileContent = 'Hello, World!';

const dir = path.dirname(filePath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(filePath, fileContent);
console.log('File saved!');
