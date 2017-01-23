var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
//var app = require('./server-config.js');

app.get('/', function (req, res) {
  res.sendFile(path.resolve('../client/index.html'));
});

app.listen(3000, function() {
  console.log('Server now listening on port 3000');
});

