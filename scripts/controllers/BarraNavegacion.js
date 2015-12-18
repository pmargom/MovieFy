// Controlador de la barra de navegación.
angular.module("jeviteca").controller("BarraNavegacionCtrl", function($scope, $route) {

   // Comprobamos si la ruta navegada es "/albums".
   $scope.rutaEsAlbums = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/albums";
   };

   // Comprobamos si la ruta navegada es "/bands".
   $scope.rutaEsBands = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/bands";
   };

   // Comprobamos si la ruta navegada es "/genres"
   $scope.rutaEsGenres = function() {

      return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/genres";
   };
});