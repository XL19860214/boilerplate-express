var express = require('express');
var app = express();
var bodyParser = require('body-parser');

console.log("Hello World");

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(req.method, req.path, ' - ', req.ip);
  next();
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const fullpath = __dirname + '/views/index.html';
  res.sendFile(fullpath);
})



app.get('/json', (req, res) => {
  const message = 'Hello json';
  res.json({
    message: process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
  });
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    time: req.time
  })
})

app.get('/:word/echo', (req, res) => {
  res.json({
    echo: req.params.word
  })
})

// https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client
app.route('/name')
   .get((req, res) => {
     res.json({
       name: req.query.first + ' ' + req.query.last
     })
   })
   .post((req, res) => {
     res.json({
       name: req.body.first + ' ' + req.body.last
     })
   })
   






















 module.exports = app;
