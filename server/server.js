var express = require('express');
var path = require('path');
var db = require('./db/db.js')

var app = express();

var port = process.env.PORT || 3000;

app.use('', express.static('client'));

app.get('/', function (req, res) {
  //console.log(db.db);
  res.sendFile(path.resolve('./client/index.html'));
});

app.get('/database', function(req, res) {
  db.getData(req, res);
});

app.listen(port, function() {
  console.log('Server now listening on port 3000');
});