angular.module('app.services', [])
  .factory('DatabaseRequests', function($http) {

    var getQuestions = function() {
      return $http({
        method: 'GET',
        url: '/database'
      })
      .then(function(response) {
        return response.data;
      });
    };

    return {
      getQuestions: getQuestions
    }
  })