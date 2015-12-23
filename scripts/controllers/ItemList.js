angular.module("moviefy").controller("ItemListCtrl", function($scope, Items, $location, $timeout, Properties, MovieFyApi) {

   var tempItems = [];

   if (Items !== undefined) {
      if (Items.results !== undefined) {
         tempItems = Items.results;
      }
      else {
         tempItems = Items;
      }
   }

   var getData = function() {
      var its = [];

      tempItems.forEach(function (item) {

         its.push({
            data: item,
            IsSaved: false
         });

         //debugger;
         var itemId = item.id;
         var promise = MovieFyApi.CheckIsSaved(itemId);

         promise.then(
             function (resp) {
                //debugger;
                if (!$scope.$$phase) {
                   $scope.$digest();
                }

                var item = _.find(its, function(it){ return it.data.id === itemId; });
                if (typeof(item) !== "undefined") {
                   item.IsSaved = resp;
                }
             },
             function() {
                var item = _.find(its, function(it){ return it.data.id === itemId; });
                if (typeof(item) !== "undefined") {
                   item.IsSaved = false;
                }
             }
         );

      });

      return its;
   };

   //debugger;
   var items = getData();

   $scope.nItems = items.length;

   $scope.viewDetails = function(idItem) {

      alert('Showing details for item with id: ' + idItem);

   };

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

   $scope.isPersistedMovie = function(){

      return $scope.getType() === Properties.persistedItemType.Movie;

   };

   $scope.isPersistedSerie = function(){

      return $scope.getType()  === Properties.persistedItemType.Serie;

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
