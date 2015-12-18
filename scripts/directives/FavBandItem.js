// Directiva que representa cada fila en la lista de bandas.
angular.module("jeviteca").directive("elementoFavBand", function() {

   return {

      restrict: "A",
      templateUrl: "views/FavBandItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         band: "=",
         onBandClick: "&",
         onStarChange: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            // configuro la llamada al evetno y los parámetros que serán pasados
            scope.onBandClick({ idBand: scope.band.id });

         });

         scope.starChanged = function() {

            scope.onStarChange({ idBand: scope.band.id });

         };

      }
   };
});

