var express = require('express');
var path = require('path');
var db = require('./db/db.js')

var app = express();

var port = process.env.PORT || 3000;



app.get('/', function (req, res) {
  res.sendFile(path.resolve('./client/index.html'));
});

app.get('/questions', function (req, res) {
  res.sendFile(path.resolve('./client/partials/quetsions.html'));
});

// app.get('/answerA', function (req, res) {
//   res.sendFile(path.resolve('./client/partials/answerA.html'));
// });

// app.get('/answerB', function (req, res) {
//   res.sendFile(path.resolve('./client/partials/answerB.html'));
// });

// app.get('/answerC', function (req, res) {
//   res.sendFile(path.resolve('./client/partials/answerC.html'));
// });

// app.get('/answerD', function (req, res) {
//   res.sendFile(path.resolve('./client/partials/answerD.html'));
// });

app.get('/database', function(req, res) {
  db.getData(req, res);
});

app.use('', express.static('client'));
app.use('', express.static('client/partials'));

app.listen(port, function() {
  console.log('Server now listening on port 3000');
});