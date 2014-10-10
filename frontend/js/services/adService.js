require('angular').module('classified').factory('adService', function ($http) {

   var ROOT_URL = 'http://localhost:9000/ad';
   
   var makeGetRequest = function(url, callback) {
    	$http({
            method : 'GET',
            url : url,
        }).success(function (data) {
            callback(data);
        }).error(function(data, status, headers, config) {
        	console.log("Error getting data status: ", status);
        });
    }

    return {        
        getAllAds : function (callback) {
            makeGetRequest(ROOT_URL, callback);  
        },
        getSomeAds : function (filter, callback) {
            makeGetRequest(ROOT_URL + '/' + filter, callback);  
        }
    };
});
