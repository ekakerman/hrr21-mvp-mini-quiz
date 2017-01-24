angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/answerA', {
        templateUrl: '/partials/answerA.html',
        controller: 'answerACtrl'
      })
      .when('/answerB', {
        templateUrl: '/partials/answerB.html',
        controller: 'answerBCtrl'
      })
      .when('/answerC', {
        templateUrl: '/partials/answerC.html',
        controller: 'answerCCtrl'
      })
      .when('/answerD', {
        templateUrl: '/partials/answerD.html',
        controller: 'answerDCtrl'
      })
      .otherwise({
        redirectTo: '/partials/questions.html'
      });
  })