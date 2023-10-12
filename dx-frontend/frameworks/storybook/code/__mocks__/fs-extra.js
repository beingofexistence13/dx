const fs = jest.createMockFromModule('fs-extra');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles = Object.create(null);

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
function __setMockFiles(newMockFiles) {
  mockFiles = newMockFiles;
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
const readFile = async (filePath) => mockFiles[filePath];
const readFileSync = (filePath = '') => mockFiles[filePath];
const existsSync = (filePath) => !!mockFiles[filePath];
const readJson = (filePath = '') => JSON.parse(mockFiles[filePath]);
const readJsonSync = (filePath = '') => JSON.parse(mockFiles[filePath]);
const lstatSync = (filePath) => ({
  isFile: () => !!mockFiles[filePath],
});
const writeJson = jest.fn((filePath, json, { spaces } = {}) => {
  mockFiles[filePath] = JSON.stringify(json, null, spaces);
});

// eslint-disable-next-line no-underscore-dangle
fs.__setMockFiles = __setMockFiles;
fs.readFile = readFile;
fs.readFileSync = readFileSync;
fs.readJson = readJson;
fs.readJsonSync = readJsonSync;
fs.existsSync = existsSync;
fs.lstatSync = lstatSync;
fs.writeJson = writeJson;

module.exports = fs;
