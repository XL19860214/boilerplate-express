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
  const message = 'Hello json'
  res.json({
    message: process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
  })
})


























 module.exports = app;
