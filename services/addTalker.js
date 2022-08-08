// const fs = require('fs');
const readFiles = require('./readFiles');
const writeFiles = require('./writeFiles');

// const path = ('/talker.json');

const addTalker = (req, res, _next) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const readTalkers = readFiles();

  const id = readTalkers.length + 1;

  const newTalker = { name, age, id, talk: { watchedAt, rate } };

  writeFiles([...readTalkers, newTalker]);

  res.status(201).json(newTalker);
};

module.exports = {
  addTalker,
};