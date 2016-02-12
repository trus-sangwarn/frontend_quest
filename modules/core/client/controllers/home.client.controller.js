'use strict';

angular.module('core').controller('HomeController', ['$scope', '$http',
  function ($scope, $http) {
    var api = 'https://www.takemetour.com/api/home';
    $http.get(api).success(function(response) {
      $scope.layouts = response.inspiration_layouts;
    });
  }
]);
