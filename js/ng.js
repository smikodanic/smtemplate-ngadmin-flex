/*global angular, document*/
var clientApp = angular.module('clientApp', []);


/* ------ CONTROLLERS ----- */
clientApp.controller('mainCtrl', function ($scope, $timeout) {
    'use strict';
    $scope.myVar = 'Something goood!';


    $scope.toggleDropdownMenu = function () {
        $scope.inOpenClass = (!$scope.inOpenClass)
            ? 'in open'
            : '';
    };


    $scope.toggleSidebar = function () {
        if (!$scope.hidesidebarClass) {
            $scope.hidesidebarClass = 'hide-sidebar';
        } else {
            $scope.hidesidebarClass = '';
            angular.element(document.querySelectorAll('#sidebar > .menu-section')).css('opacity', 0);
            $timeout(function () {
                angular.element(document.querySelectorAll('#sidebar > .menu-section')).css({opacity: 1, transition: 'all 0.8s ease'});
            }, 800);

        }

    };


    $scope.toggleSidebarChild = function ($event) {
        $event.preventDefault();

        // console.log(angular.element($event.currentTarget).parent());
        if (angular.element($event.currentTarget).parent('li').hasClass('active')) {
            angular.element($event.currentTarget).parent('li').removeClass('active');
        } else {
            // angular.element(document.querySelector('li.active')).removeClass('active'); //remove all active
            angular.element($event.currentTarget).parent('li').addClass('active');
        }
    };


    $scope.toggleSidebarGrandChild = function ($event) {
        $event.preventDefault();

        // console.log(angular.element($event.currentTarget).parent());
        if (angular.element($event.currentTarget).parent('li').hasClass('active')) {
            angular.element($event.currentTarget).parent('li').removeClass('active');
        } else {
            angular.element(document.querySelectorAll('.child li')).removeClass('active'); // remove all 'active' classes
            angular.element($event.currentTarget).parent('li').addClass('active');
        }
    };
});
