
// Controlador encargado de la lógica correspondiente con vista de la lista de bandas.
angular.module("jeviteca").controller("BandListCtrl", function($scope, Bands, $location, $timeout) {

   // Almacenamos en local la lista de bandas para que no se muestren
   // todos directamente en la vista.
   var bands = Bands.data;
   $scope.nItems = bands.length;

   // Establecemos las propiedades del paginador.
   $scope.paginador = {

      // Cambiamos de página.
      cambioDePagina: function() {
         // Obtenemos el primer y último elemento de la página a mostrar.
         var primero = ($scope.paginador.paginaActual - 1) * $scope.paginador.elementosPorPagina;
         var ultimo = primero + $scope.paginador.elementosPorPagina;
         // Establecemos en la vista la página seleccionada.
         $scope.bands = bands.slice(primero, ultimo);
      },

      // Página actual.
      paginaActual: 1,

      // Total de elementos -albums-.
      totalElementos: $scope.nItems,

      // Tamaño de página.
      elementosPorPagina: 4
   };

   // Redirigir el navegador al detalle del post indicado.
   $scope.navegar = function(idBand) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/bands/detalle/" + idBand); }, 100);
   };

   // Forzamos el cambio de página para que traiga la primera al entrar a la vista.
   $scope.paginador.cambioDePagina();

});