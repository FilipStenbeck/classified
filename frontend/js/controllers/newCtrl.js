require('angular').module('classified').controller('NewCtrl', function ($scope, adService) {

	$scope.onNew = function () {
		adService.save($scope.ad, function (resp) {
			//Clear form data
		 	$scope.ad = {};

		 	//print message
		 	console.log(resp)
		});
	}
});
