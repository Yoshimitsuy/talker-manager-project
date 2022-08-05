const fs = require('fs');
const crypto = require('crypto');

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

function generateToken() { 
 return crypto.randomBytes(8).toString('hex');
}

const matrixToken = (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  const token = generateToken();

  return res.status(200).json({ token });
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;

  const validEmail = regexEmail.test(email);

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!validEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  strikeTalker,
  strikeTalkerById,
  matrixToken,
  generateToken,
  checkEmail,
  checkPassword,
};