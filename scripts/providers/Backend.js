
angular.module("moviefy").provider("Backend", function($httpProvider) {

   var backendUrl = "";
   var backendImagesUrl = "";
   var apiKey = "";

   return {

      setApiKey: function(value) {
         //$httpProvider.defaults.headers.common = {
         //   "api_key": value
         //};
         apiKey = value;
      },

      // Preventing cross origin issue
      setCorsRequests: function() {
         $httpProvider.defaults.headers.post = {};
         $httpProvider.defaults.headers.put = {};
         $httpProvider.defaults.headers.patch = {};
      },

      // setting the base backend url.
      setBackendUrl: function(value) {
         backendUrl = value;
      },

      // setting the base backend url for images
      setBackendImagesUrl: function(value) {
         backendImagesUrl = value;
      },

      $get: ["$http", "$q", "$location", "Properties", function($http, $q, $location, Properties) {

         return {

            // get the list of items
            getItems: function() {

               var itemType = $location.$$path.indexOf("movies") > -1 ? Properties.itemType.Movie : Properties.itemType.Serie;
               var fullUrl = backendUrl + "/" + itemType + "?api_key=" + apiKey;

               var defer = $q.defer();

               $http.get(fullUrl).then(
                  function (resp) {

                     //debugger;
                     defer.resolve(resp.data);
                  },
                  function (error) {
                     //debugger;
                     defer.reject(error);
                  }
               );

               return defer.promise;
            }

         };
      }]
   };


});