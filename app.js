(function() {
    'use strict';

angular.module('whatsForLunch', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
    $scope.name = "What's For Lunch";
    $scope.enjoy = "Enjoy!";

    $scope.sayMessage =function () {
      return "Check If Too Much";
    };

    $scope.morethan3 = function () {
      $scope.tooMuch = "Too Much";
    };
    }
