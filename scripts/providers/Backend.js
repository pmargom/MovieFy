
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

      $get: ["$http", "$q", function($http, $q) {

         return {

            // get the list of movies
            getMovies: function() {

               var fullUrl = backendUrl + "/movie?api_key=" + apiKey;
               return $http.get(fullUrl, {
                  cache: true
               });

               /*var defer = $q.defer();

               var fullUrl = backendUrl + "movie?api_key=" + Properties.backendUrl;
               $http.get(fullUrl).then(
                  function (resp) {

                     debugger;
                     var item = _.find(resp.data, function(it){ return it.id == idAlbum; }); // con === no lo encuentra
                     if (typeof(item) !== "undefined") {
                        defer.resolve(item);
                     }
                     else {
                        defer.reject(null);
                     }
                  },
                  function (error) {
                     debugger;
                     defer.reject(error);
                  }
               );

               return defer.promise;*/
            }

         };
      }]
   };


});