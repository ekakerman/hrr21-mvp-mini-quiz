var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello!');
  //or...
  res = {
    name: first,
    apellido: last
  };
  res.end(JSON.stringify(res));
  //or...
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

//run with node app.js

app.get('/', function(req, res) {
  console.log("Got a Post request");
  res.send('Hello');
}

app.use(express.static('public')); //adds static middleware

dependency: routeProvider
$routeProvider.when('/users', {
  templateUrl: 'views/users/html',
  controller: UsersCtrl
  }).otherwise({
    templateUrl: 'otherTemplate'
  })
