
angular.module("moviefy").directive("item", function(Properties) {

   return {

      restrict: "E",

      templateUrl: "views/Item.html",

      scope: {
         item: "=",
         type: "=",
         onItemClick: "&"
      },

      link: function(scope, item) {

         item.bind("click", function() {

            //alert("dentro de un movie item")
            scope.onItemClick({ id: scope.item.id });
         });

         scope.isMovie = function(){

            return scope.type === Properties.itemType.Movie;

         };

         scope.isSerie = function(){

            return scope.type === Properties.itemType.Serie;

         };
      }
   };
});
