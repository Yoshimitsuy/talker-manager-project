import readFiles from './readFiles';

const fs = require('fs');

const path = ('/talker.json');

const newTalker = (req, res, _next) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const readTalkers = readFiles();

  const { id } = readTalkers.length + 1;

  const newTalk = { id, name, age, talk: { watchedAt, rate } };

  readTalkers.push(newTalk);
  fs.writeFile(path, JSON.stringify(readTalkers));
  return res.status(201).json(newTalk);
};

module.exports = newTalker;