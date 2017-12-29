const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send('Hello world');
});

app.listen(3000, () => console.log('Example app is listening on port 3000!'));

module.exports = app;
