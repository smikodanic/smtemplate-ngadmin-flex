/*global angular*/
var clientApp = angular.module('clientApp', []);


/* ------ CONTROLLERS ----- */
clientApp.controller('mainCtrl', function ($scope) {
    'use strict';
    $scope.myVar = 'Something goood!';

    $scope.toggleSidebar = function () {
        $scope.hidesidebarClass = (!$scope.hidesidebarClass)
            ? 'hide-sidebar'
            : '';
    };

    $scope.toggleDropdownMenu = function () {
        $scope.inOpenClass = (!$scope.inOpenClass)
            ? 'in open'
            : '';
    };
});
