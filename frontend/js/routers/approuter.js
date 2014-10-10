'use strict';

require('angular');
require('angular-route');

require('angular').module('classified').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'AllCtrl'
      })
      .when('/all', {
        templateUrl: 'templates/main.html',
        controller: 'AllCtrl'
      })
      .when('/filter', {
        templateUrl: 'templates/main.html',
        controller: 'FilterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
