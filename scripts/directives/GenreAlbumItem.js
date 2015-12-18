
angular.module("jeviteca").directive("genreAlbumItem", function() {

   return {

      restrict: "E",
      templateUrl: "views/GenreAlbumItem.html",
      scope: {
         album: "="
      }

   };

});