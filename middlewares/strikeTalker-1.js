const fs = require('fs').promises;

const path = './talker.json';

const strikeTalker = async (req, res) => {
  const talkers = await fs.readFile(path, 'utf8').then((i) => JSON.parse(i));

  if (!talkers) return res.status(200).send([]);

  return res.status(200).send(talkers);
};

module.exports = strikeTalker;