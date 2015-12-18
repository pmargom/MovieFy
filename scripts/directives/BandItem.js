// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoBand", function() {

   return {

      restrict: "A",

      templateUrl: "views/BandItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         band: "=",
         onPostClick: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            scope.onPostClick({ idBand: scope.band.id });
         });
      }
   };
});

