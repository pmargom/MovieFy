angular.module("jeviteca").directive("album", function() {

   return {

      restrict: "E",
      templateUrl: "views/Album.html",
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