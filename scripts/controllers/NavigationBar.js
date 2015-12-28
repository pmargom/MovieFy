
angular.module("moviefy").controller("NavigationBarCtrl", function($scope, $route) {

   $scope.routeIsMovies = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath && $route.current.$$route.originalPath.indexOf("movies") > -1;
   };

   $scope.routeIsSeries = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath && $route.current.$$route.originalPath.indexOf("series") > -1
   };

});