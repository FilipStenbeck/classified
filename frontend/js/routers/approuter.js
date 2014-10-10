'use strict';

require('angular');
require('angular-route');

require('angular').module('classified').config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'templates/list.html',
        controller: 'FilterCtrl'
      })
      .otherwise({
        redirectTo: '/list'
      });
  });
