const fs = require('fs');

const path = './talker.json';

const readFiles = () => {
  const readFile = fs.readFileSync(path, 'utf8');
  const data = JSON.parse(readFile);
  return data;
};

module.exports = readFiles;