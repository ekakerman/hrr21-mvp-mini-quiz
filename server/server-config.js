var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile('../client/index.html');
});