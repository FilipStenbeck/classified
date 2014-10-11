require('angular').module('classified').factory('filterService', function ($http) {

    var filter = "";

    return {        
        getFilter : function () {
            return filter;  
        },
        setFilter : function (newfilter) {
            filter = newfilter;  
        }
    };
});