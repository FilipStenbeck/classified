require('angular').module('classified').controller('NewCtrl', function ($scope, adService, $location) {

	$scope.show = false;

	$scope.onNew = function () {
		adService.save($scope.ad, function (resp) {
			$scope.ad = {};
			$scope.show = true;
		});
	}
});
