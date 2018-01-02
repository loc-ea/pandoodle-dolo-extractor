const extractKeywords = require('./extractor').extractKeywords;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.send(extractKeywords(req.body.text));
});

app.listen(3000, () => console.log('Example app is listening on port 3000!'));

module.exports = app;
