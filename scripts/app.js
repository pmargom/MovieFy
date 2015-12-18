
angular.module("moviefy", ["ngRoute", "angular-loading-bar", "ui.bootstrap"]);

angular.module("moviefy").config(function(BackendProvider, Properties) {

   BackendProvider.setApiKey(Properties.apiKey);
   BackendProvider.setCorsRequests();
   BackendProvider.setBackendUrl(Properties.backendUrl);
   BackendProvider.setBackendImagesUrl(Properties.backendImagesUrl);

});

angular.module("moviefy").config(function(cfpLoadingBarProvider) {

   cfpLoadingBarProvider.includeSpinner = false;

});

angular.module("moviefy").config(function($routeProvider) {

   $routeProvider.when("/movies", {
      controller: "MovieListCtrl",
      templateUrl: "views/MovieList.html",
      resolve: {
         Movies: ["Backend", function(Backend) {
            return Backend.getMovies();
         }]
      }
   });

   // default route.
   $routeProvider.otherwise({
      redirectTo: "/movies"
   });

});