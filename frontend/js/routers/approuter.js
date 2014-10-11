'use strict';

require('angular');
require('angular-route');

require('angular').module('classified').config(function ($routeProvider) {
	$routeProvider
	.when('/list', {
    	templateUrl: 'templates/list.html',
        controller: 'FilterCtrl'
   	})
	.when('/new', {
    	templateUrl: 'templates/new.html',
        controller: 'NewCtrl'
   	})
    .otherwise({
    	redirectTo: '/list'
    });
});
