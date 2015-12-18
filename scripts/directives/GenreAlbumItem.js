
angular.module("moviefy").directive("genreAlbumItem", function() {

   return {

      restrict: "E",
      templateUrl: "views/GenreAlbumItem.html",
      scope: {
         album: "="
      }

   };

});