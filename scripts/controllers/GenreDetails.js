
angular.module("jeviteca").controller("GenreDetailsCtrl", function($scope, Genre, $location, $timeout) {

   //debugger;
   $scope.genre = Genre;

   $scope.volver = function() {

      history.back();

   };

   $scope.navegar = function(idAlbum) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/albums/detalle/" + idAlbum); }, 100);
   };

});