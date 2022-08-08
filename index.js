const express = require('express');
const checkAge = require('./services/checkAge');
const checkEmail = require('./services/checkEmail');
const checkName = require('./services/checkName');
const checkPassword = require('./services/checkPassword');
const checkRate = require('./services/checkRate');
const checkTalk = require('./services/checkTalk');
const checkWatchedAt = require('./services/checkWatchedAt');
const { addTalker } = require('./services/addTalker');
const { matrixToken } = require('./services/matrixToken');

const { strikeTalker, strikeTalkerById } = require('./services/middlewares');

const app = express();
// app.use(bodyParser.json());
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', strikeTalker);

app.get('/talker/:id', strikeTalkerById);

app.post('/login', checkEmail, checkPassword, matrixToken); // 3

app.post('/talker', checkName, checkAge, checkTalk,
 checkWatchedAt, checkRate, addTalker);

app.listen(PORT, () => {
  console.log('Online');
});
