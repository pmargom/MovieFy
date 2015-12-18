// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoGenre", function() {

   return {

      restrict: "",

      templateUrl: "views/GenreItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         genre: "=",
         onGenreClick: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            scope.onGenreClick({ idGenre: scope.genre.id });
         });
      }
   };
});

