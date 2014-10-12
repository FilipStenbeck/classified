require('angular').module('classified').directive("adCard", function ($http) {
   return {
        restrict: "E",
        scope: false,
        templateUrl: 'templates/adcard.html',
        link: function (scope, element) {
            
            //clicklistner to navigate to category when clicking icon
            setTimeout(function() {
                var category = $(element).find('img').data('category');
                $(element).find('img').click(function(event) {
                    window.location.href = "/#/list?topic=" + category;
                });
            }, 1);
        }
    };
});
