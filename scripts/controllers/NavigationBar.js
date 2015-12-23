
angular.module("moviefy").controller("NavigationBarCtrl", function($scope, $route) {

   $scope.routeIsMovies = function() {

      //debugger;
      return $route.current && $route.current.$$route && ($route.current.$$route.originalPath === "/search/movies" || $route.current.$$route.originalPath === "/saved/movies");
   };

   $scope.routeIsSeries = function() {

      return $route.current && $route.current.$$route && ($route.current.$$route.originalPath === "/search/series" || $route.current.$$route.originalPath === "/saved/series");
   };

});