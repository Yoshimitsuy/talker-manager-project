const fs = require('fs');

const path = './talker.json';

const strikeTalker = (req, res) => {
  const talkers = fs.readFileSync(path, 'utf8');
  const data = JSON.parse(talkers); // dei uma arrumada na bagunça desse código

  return res.status(200).send(data);
};

const strikeTalkerById = (req, res) => {
  const { id } = req.params;
  const talkers = fs.readFileSync(path, 'utf8');
  const dataTalkers = JSON.parse(talkers);
  const indexID = dataTalkers.find((t) => t.id === Number(id));

  if (!indexID) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).send(indexID);
};

module.exports = {
  strikeTalker,
  strikeTalkerById,
};