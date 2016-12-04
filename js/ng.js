/*global angular, window, document*/
var clientApp = angular.module('clientApp', [
    'ui.bootstrap'
]);


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


    //*** ELEMENTS ***
    $scope.dismissAlert = function () {
        $scope.isAlertHidden = true;
    };


});


//<ul auto-active> ... </ul> -make link 'active' automatically by URL
clientApp.directive('autoActive', ['$location', function ($location) {
    'use strict';

    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {

            function setActive() {

                //$location.path() is for single page app
                var path = $location.path();
                // console.log('path: ' + path);

                if (path) {
                    angular.forEach(element.find('li'), function (li) {

                        var anchor = li.querySelector('a');
                        // console.log('li a: ', anchor.href);

                        var regPattern = path + '(?=\\?|$)';
                        var reg = new RegExp(regPattern, 'i');

                        if (anchor.href.match(reg)) {
                            angular.element(document.querySelectorAll('li')).removeClass('active');
                            angular.element(li).addClass('active'); //coloring link
                            angular.element(li).parent().parent().addClass('active'); //open menu
                        } else {
                            angular.element(li).removeClass('active');
                        }

                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    };

}]);
