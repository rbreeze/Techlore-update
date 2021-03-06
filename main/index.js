const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);