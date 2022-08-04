const fs = require('fs');

const path = './talker.json';

const strikeTalker = (req, res) => {
  const talkers = fs.readFileSync(path, 'utf8');
  const data = JSON.parse(talkers); // dei uma arrumada na bagunça desse código

  return res.status(200).send(data);
};

module.exports = strikeTalker;