(function() {
    'use strict';

    angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name = "Kimberly";
    $scope.sayHello = function () {
      return "Hello Coursera!";

    };
  });



})();
