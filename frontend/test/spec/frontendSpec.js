require('angular');
require('angular-mocks');

require('../../js/app');

var BACKEND_URL = "http://localhost:9000";

describe("Frontend", function() {
 
    beforeEach(window.angular.mock.module("classified"))
  	
  	describe("Controllers", function() {

    	describe("AllCtrl", function() {

		    it("should show a default message", inject(function($rootScope, $controller){
		    	var ctrl, scope = $rootScope.$new();
		    	ctrl = $controller("AllCtrl", { $scope: scope });
		       	expect(scope.message).toEqual("all ads");
		    })); 
		});

		describe("FilterCtrl", function() {

		    it("should show a default message", inject(function($rootScope, $controller){
		    	var ctrl, scope = $rootScope.$new();
		    	ctrl = $controller("FilterCtrl", { $scope: scope });
		       	expect(scope.message).toEqual("some ads");
		    })); 
		});
	});
});