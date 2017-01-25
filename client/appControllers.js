angular.module('app')

.controller('questionCtrl', function($scope, $location, DatabaseRequests) {

  $scope.answers = {
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: ''
  };

  $scope.calculateResult = function() {
    var answersArr = [];
    for (var key in $scope.answers) {
      answersArr.push($scope.answers[key])
    }
    var inv = answersArr.reduce(function(prev, next) {
      prev[next] = prev[next] + 1 || 1;
      return prev;
    }, {});

    var winner = Object.keys(inv).reduce(function(prev, next) {
      return inv[prev] > inv[next] ? prev : next;
    });

    $location.path('/answer' + winner);
  }

})



.controller('answerACtrl', function ($scope, DatabaseRequests) {
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

.controller('answerBCtrl', function ($scope, DatabaseRequests) {
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

.controller('answerCCtrl', function ($scope, DatabaseRequests) {
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

.controller('answerDCtrl', function ($scope, DatabaseRequests) {
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