
// Controlador encargado de la lógica correspondiente con vista de la lista de álbumes.
angular.module("jeviteca").controller("AlbumListCtrl", function($scope, Albums, $location, $timeout) {

   // Almacenamos en local la lista de álbumes para que no se muestren
   // todos directamente en la vista.
   //debugger;
   var albums = Albums.data;
   $scope.nItems = albums.length;

   // Establecemos las propiedades del paginador.
   $scope.paginador = {

      // Cambiamos de página.
      cambioDePagina: function() {
         // Obtenemos el primer y último elemento de la página a mostrar.
         var primero = ($scope.paginador.paginaActual - 1) * $scope.paginador.elementosPorPagina;
         var ultimo = primero + $scope.paginador.elementosPorPagina;
         // Establecemos en la vista la página seleccionada.
         $scope.albums = albums.slice(primero, ultimo);
      },

      // Página actual.
      paginaActual: 1,

      // Total de elementos -albums-.
      totalElementos: $scope.nItems,

      // Tamaño de página.
      elementosPorPagina: 4
   };

   // Redirigir el navegador al detalle del album indicado.
   $scope.navegar = function(idAlbum) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/albums/detalle/" + idAlbum); }, 100);
   };

   // bringing the first page of results
   $scope.paginador.cambioDePagina();

});