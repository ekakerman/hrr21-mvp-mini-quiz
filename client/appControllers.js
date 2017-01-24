angular.module('app.controllers', [])

.controller('questionCtrl', function($scope, $location, DatabaseRequests) {
  $scope.data = {};
  console.log('made it to questions controller');

  var fetchQuestions = function () {
    DatabaseRequests.getQuestions()
    console.log('database request successful');
      .then(function(questions) {
        $scope.data.questions = questions;
      })
      .catch(function(error) {
        console.log('ERROR FETCHING QUESTIONS', error)
      });
  };

  fetchQuestions();
})




.controller('answerACtrl', function ($scope, $location) {
  $scope.results = 'ANSWER A RESULTS!';
})

.controller('answerBCtrl', function ($scope, $location) {
  $scope.results = 'ANSWER B RESULTS!';
})

.controller('answerCCtrl', function ($scope, $location) {
  $scope.results = 'ANSWER C RESULTS!';
})

.controller('answerDCtrl', function ($scope, $location) {
  $scope.results = 'ANSWER D RESULTS!';
})