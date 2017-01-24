angular.module('app')

.controller('questionCtrl', function($scope, $location, DatabaseRequests) {
  $scope.data = {};
  console.log('made it to questions controller');

  $scope.answers = {
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: ''
  };
})



.controller('answerACtrl', function ($scope, $location, DatabaseRequests) {
  $scope.results = {};

  var fetchQuestions = function () {
    DatabaseRequests.getQuestions()
      .then(function(questions) {
        $scope.results.title = questions[0].resultA;
        $scope.results.explain = questions[0].explanationA;
        console.log(questions[0])
      })
      .catch(function(error) {
        console.log('ERROR FETCHING QUESTIONS', error)
      });
  };
  fetchQuestions();

})

.controller('answerBCtrl', function ($scope, $location, DatabaseRequests) {
  $scope.results = {};

  var fetchQuestions = function () {
    DatabaseRequests.getQuestions()
      .then(function(questions) {
        $scope.results.title = questions[0].resultB;
        $scope.results.explain = questions[0].explanationB;
        console.log(questions[0])
      })
      .catch(function(error) {
        console.log('ERROR FETCHING QUESTIONS', error)
      });
  };
  fetchQuestions();

})

.controller('answerCCtrl', function ($scope, $location, DatabaseRequests) {
  $scope.results = {};

  var fetchQuestions = function () {
    DatabaseRequests.getQuestions()
      .then(function(questions) {
        $scope.results.title = questions[0].resultC;
        $scope.results.explain = questions[0].explanationC;
        console.log(questions[0])
      })
      .catch(function(error) {
        console.log('ERROR FETCHING QUESTIONS', error)
      });
  };
  fetchQuestions();

})

.controller('answerDCtrl', function ($scope, $location, DatabaseRequests) {
  $scope.results = {};

  var fetchQuestions = function () {
    DatabaseRequests.getQuestions()
      .then(function(questions) {
        $scope.results.title = questions[0].resultD;
        $scope.results.explain = questions[0].explanationD;
        console.log(questions[0])
      })
      .catch(function(error) {
        console.log('ERROR FETCHING QUESTIONS', error)
      });
  };
  fetchQuestions();

})