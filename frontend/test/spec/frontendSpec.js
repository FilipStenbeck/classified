require('angular');
require('angular-mocks');

require('../../js/app');

var BACKEND_URL = "http://localhost:9000";
var specHelper = require('./specHelper');
var data = specHelper.mockData;

describe("Classified frontend", function() {
 
    beforeEach(window.angular.mock.module("classified"))
  	
    describe("Controllers", function() {

	  	describe("FilterCtrl", function() {
	  		it("should get ads from the server", inject(function($rootScope, $controller, $httpBackend){
				var ctrl, scope = $rootScope.$new();
	        		
			    ctrl = $controller("FilterCtrl", { $scope: scope });
	        	$httpBackend.when("GET", BACKEND_URL + "/ad").respond(data);
			       	
			    //No ads before getting data from server
			    expect(scope.ads).toEqual([]);
			       	
			    $httpBackend.flush();
			       	
			    //Should have ads
			    expect(scope.ads.length).toBeGreaterThan(0);
			}));

	  		it("ads sould get an icon", inject(function($rootScope, $controller, $httpBackend){
				var ctrl, scope = $rootScope.$new();
	        		
			    ctrl = $controller("FilterCtrl", { $scope: scope });
	        	$httpBackend.when("GET", BACKEND_URL + "/ad").respond(data);
			    $httpBackend.flush();
			    
			    expect(scope.ads[0].icon).not.toBe(null);
			}));
		});
	});
});
