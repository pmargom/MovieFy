
angular.module("moviefy").controller("NavigationBarCtrl", function($scope, $route) {

   $scope.routeIsMovies = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/search/movies";
   };

   $scope.routeIsSeries = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/search/series";
   };

});