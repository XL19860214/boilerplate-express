var express = require('express');
var app = express();

console.log("Hello World");

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// })

app.get('/', (req, res) => {
  const fullpath = __dirname + '/views/index.html';
  res.sendFile(fullpath);
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  res.json({
    message: 'Hello json'
  })
})


























 module.exports = app;
