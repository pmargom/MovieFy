// Directiva que representa cada fila en la lista de genreas.
angular.module("jeviteca").directive("elementoFavGenre", function() {

   return {

      restrict: "A",
      templateUrl: "views/FavGenreItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         genre: "=",
         onGenreClick: "&",
         onStarChange: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            // configuro la llamada al evetno y los parámetros que serán pasados
            scope.onGenreClick({ idGenre: scope.genre.id });

         });

         scope.starChanged = function() {

            scope.onStarChange({ idGenre: scope.genre.id });

         };

      }
   };
});

