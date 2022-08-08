const fs = require('fs');

const path = './talker.json';

function writeFiles(data) {
  return fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = writeFiles;