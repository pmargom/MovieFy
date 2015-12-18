
// Controlador encargado de la lógica correspondiente con vista de la lista de géneros.
angular.module("jeviteca").controller("FavGenreListCtrl", function($scope, Genres, $location, $timeout) {

   // Almacenamos en local la lista de géneros para que no se muestren
   // todos directamente en la vista.
   //debugger;
   var genres = Genres; // aquí no uso Genre.data porque lo que llega no lo de vuelve $http.get sino favGenres leído del localstorage
   $scope.nItems = 0;

   if (genres !== null) $scope.nItems = genres.length;

   // Establecemos las propiedades del paginador.
   $scope.paginador = {

      // Cambiamos de página.
      cambioDePagina: function() {
         // Obtenemos el primer y último elemento de la página a mostrar.
         var primero = ($scope.paginador.paginaActual - 1) * $scope.paginador.elementosPorPagina;
         var ultimo = primero + $scope.paginador.elementosPorPagina;
         // Establecemos en la vista la página seleccionada.
         //debugger;
         $scope.genres = genres.slice(primero, ultimo);
      },

      // Página actual.
      paginaActual: 1,

      // Total de elementos -genres-.
      totalElementos: $scope.nItems,

      // Tamaño de página.
      elementosPorPagina: 4
   };

   $scope.navegar = function(idGenre) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/genres/detalle/" + idGenre); }, 100);
   };

   $scope.deleteFav = function(idGenre){

      //debugger;
      var item = _.find(genres, function(it){ return it.id === idGenre; });
      if (typeof(item) !== "undefined"){

         //debugger;
         var index = genres.indexOf(item);
         genres.splice(index, 1);
         $scope.genres = genres;
         $scope.nItems = $scope.genres.length;
         $scope.paginador.totalElementos = $scope.nItems;
         $scope.paginador.cambioDePagina();
      }

   };

   // bringing the first page of results
   $scope.paginador.cambioDePagina();

});