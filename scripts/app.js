
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

   $routeProvider.when("/search/movies", {
      controller: "ItemListCtrl",
      templateUrl: "views/ItemList.html",
      resolve: {
         Items: ["Backend", function(Backend) {
            return Backend.getItems();
         }]
      }
   });

   $routeProvider.when("/search/series", {
      controller: "ItemListCtrl",
      templateUrl: "views/ItemList.html",
      resolve: {
         Items: ["Backend", function(Backend) {
            return Backend.getItems();
         }]
      }
   });

   // default route.
   $routeProvider.otherwise({
      redirectTo: "/search/movies"
   });

});