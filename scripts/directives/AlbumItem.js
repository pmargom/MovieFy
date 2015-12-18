// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoAlbum", function() {

   return {

      restrict: "A",

      templateUrl: "views/AlbumItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         album: "=",
         onItemClick: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            scope.onItemClick({ idAlbum: scope.album.id });
         });
      }
   };
});

