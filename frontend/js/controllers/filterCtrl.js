require('angular').module('classified').controller('FilterCtrl', function ($scope, $routeParams, adService) {
	var topic = $routeParams.topic;

	var populateAds = function (data) {
		console.log(data)
		$scope.ads = data;
	}
	//If there is a filter get only matching ads.
	if (topic) {
		adService.getSomeAds(topic, populateAds);
	} else {
		adService.getAllAds(populateAds);
	}
});