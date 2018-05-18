const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  console.log('/ home');
  return res.send('<h1>Versus web app express foundation</h1>');
});

app.listen(6666, () => {
  console.log('Server started on port 6666');
});