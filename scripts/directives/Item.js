
angular.module("moviefy").directive("item", function(Properties) {

   return {

      restrict: "E",

      templateUrl: "views/Item.html",

      scope: {
         item: "=",
         type: "=",
         onItemClick: "&"
      },

      link: function(scope, it) {

         it.bind("click", function() {

            scope.onItemClick({ idItem: scope.item.id });
         });

         scope.isMovie = function(){

            return scope.type === Properties.itemType.Movie;

         };

         scope.isSerie = function(){

            return scope.type === Properties.itemType.Serie;

         };

         scope.isPersistedMovie = function(){

            return scope.type === Properties.persistedItemType.Movie;

         };

         scope.isPersistedSerie = function(){

            return scope.type === Properties.persistedItemType.Serie;

         };

      }
   };
});
