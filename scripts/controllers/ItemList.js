angular.module("moviefy").controller("ItemListCtrl", function($scope, Items, $location, $timeout, Properties) {

   //debugger;

   var items = [];

   if (Items !== undefined) {
      if (Items.results !== undefined) {
         items = Items.results;
      }
      else {
         items = Items;
      }
   }

   $scope.nItems = items.length;

   $scope.getType = function() {
      if ($location.$$path.indexOf("saved/movies") > -1) return Properties.persistedItemType.Movie;
      if ($location.$$path.indexOf("saved/series") > -1) return Properties.persistedItemType.Serie;
      if ($location.$$path.indexOf("movies") > -1) return Properties.itemType.Movie;
      if ($location.$$path.indexOf("series") > -1) return Properties.itemType.Serie;
   };

   $scope.isMovie = function(){

      return $scope.getType() === Properties.itemType.Movie;

   };

   $scope.isSerie = function(){

      return $scope.getType() === Properties.itemType.Serie;

   };
   // Setting up the pagination.
   $scope.pagination = {

      // Page changing.
      pageChange: function() {
         
         // Getting the first and the last item of the page to be shown.
         var first = ($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage;
         var last = first + $scope.pagination.itemsPerPage;
         
         // go to selected view.
         $scope.items = items.slice(first, last);
      },

      // current page.
      currentPage: 1,

      // Total number of items.
      totalItems: $scope.nItems,

      // Page size.
      itemsPerPage: 6
   };

   // Redirect the web browser to the selected item.
   $scope.goTo = function(movieId) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/items/details/" + movieId); }, 100);
   };

   // bringing the first page of results
   $scope.pagination.pageChange();

});
