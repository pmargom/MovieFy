
// Controlador encargado de la lógica correspondiente con vista de la lista de bandas.
angular.module("jeviteca").controller("FavBandListCtrl", function($scope, Bands, $location, $timeout) {

   // Almacenamos en local la lista de álbumes para que no se muestren
   // todos directamente en la vista.
   //debugger;
   var bands = Bands; // aquí no uso Band.data porque lo que llega no lo de vuelve $http.get sino favBands leído del localstorage
   $scope.nItems = 0;

   if (bands !== null) $scope.nItems = bands.length;

   // Establecemos las propiedades del paginador.
   $scope.paginador = {

      // Cambiamos de página.
      cambioDePagina: function() {
         // Obtenemos el primer y último elemento de la página a mostrar.
         var primero = ($scope.paginador.paginaActual - 1) * $scope.paginador.elementosPorPagina;
         var ultimo = primero + $scope.paginador.elementosPorPagina;
         // Establecemos en la vista la página seleccionada.
         //debugger;
         $scope.bands = bands.slice(primero, ultimo);
      },

      // Página actual.
      paginaActual: 1,

      // Total de elementos -bands-.
      totalElementos: $scope.nItems,

      // Tamaño de página.
      elementosPorPagina: 4
   };

   // Redirigir el navegador al detalle del band indicado.
   $scope.navegar = function(idBand) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/bands/detalle/" + idBand); }, 100);
   };

   $scope.deleteFav = function(idBand){

      //debugger;
      var item = _.find(bands, function(it){ return it.id === idBand; });
      if (typeof(item) !== "undefined"){

         //debugger;
         var index = bands.indexOf(item);
         bands.splice(index, 1);
         $scope.bands = bands;
         $scope.nItems = $scope.bands.length;
         $scope.paginador.totalElementos = $scope.nItems;
         $scope.paginador.cambioDePagina();
      }

   };

   // bringing the first page of results
   $scope.paginador.cambioDePagina();

});