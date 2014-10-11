require('angular').module('classified').controller('FilterCtrl', function ($scope, $rootScope, $routeParams, adService, filterService) {
	var topic = $routeParams.topic,
		filter = $routeParams.filter;
		iconUtil = require('../utils/iconUtil');
		$scope.ads = [];
		
		if (filter) {
			filterService.setFilter(filter);
		}
		
		$scope.search = filterService.getFilter();
		$scope.message = ($routeParams.topic === undefined) ? 'ALL' : $routeParams.topic.toUpperCase();

		showAds = function (data) {
			data.forEach(function (ad) {
				ad.icon = iconUtil(ad.category);
			});
			$scope.ads = data;
		};
	
	$scope.$watch('search', function(newval, old) {
       filterService.setFilter(newval);
   	});

	if (topic) {
		adService.getSomeAds(topic, showAds);
	} else {
		adService.getAllAds(showAds);
	}
});