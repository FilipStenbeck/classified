require('angular').module('classified').controller('FilterCtrl', function ($scope, $rootScope, $routeParams, adService, filterService) {
	var topic = $routeParams.topic,
		filter = $routeParams.filter;
		iconUtil = require('../utils/iconUtil');
		$scope.ads = [];

	//ste category message
	$scope.message = ($routeParams.topic === undefined) ? 'ALL' : $routeParams.topic.toUpperCase();

	//handle freetext filter	
	if (filter) {
		filterService.setFilter(filter);
	}
	$scope.search = filterService.getFilter();
	$scope.$watch('search', function(newval, old) {
       filterService.setFilter(newval);
   	});

	//set an icon on each ad and then update UI
	var showAds = function (data) {
		$scope.ads = iconUtil(data);
	};

	//Get ads from server
	if (topic) {
		adService.getSomeAds(topic, showAds);
	} else {
		adService.getAllAds(showAds);
	}
});