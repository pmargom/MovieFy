
angular.module("moviefy").directive("itemMovie", function() {

   return {

      restrict: "E",

      templateUrl: "views/MovieItem.html",

      scope: {
         movie: "=",
         onItemClick: "&"
      },

      link: function(scope, item) {

         item.bind("click", function() {

            alert("dentro de un movie item")
            scope.onItemClick({ movieId: scope.movie.id });
         });
      }
   };
});
