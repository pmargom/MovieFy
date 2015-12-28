//angular.module("moviefy").controller("ItemListCtrl", function($scope, Items, $location, $timeout, Properties, MovieFyApi) {
angular.module("moviefy").controller("ItemListCtrl", function($scope, $location, $timeout, $routeParams, Properties, MovieFyApi) {


   //debugger;
   $scope.items = [];

   $scope.currentPage = $routeParams.page || 1;

   var updateDataWithSavedInfo = function(tempItems) {
      var its = [];

      tempItems.forEach(function (item) {

         its.push({
            data: item,
            IsSaved: false
         });

         //debugger;
         var itemId = item.id;
         MovieFyApi.CheckIsSaved(itemId).then(
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

   $scope.viewDetails = function(idItem) {

      //alert('Showing details for item with id: ' + idItem);

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

   // Redirect the web browser to the selected item.
   $scope.goTo = function(movieId) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/items/details/" + movieId); }, 100);
   };

   $scope.getDataPerPage = function(currentPage) {
      //debugger;
      var newPage = parseInt($scope.currentPage) + parseInt(currentPage);
      //alert('new url: ' + $location.$$url + "/page/" + newPage);
      $timeout(function() { $location.path("/search/movies/page/" + newPage); }, 100);
   };

   var loadData = function() {

      //debugger;
      if ($scope.isMovie()) {

         MovieFyApi.getItems($scope.currentPage).then(
            function (resp) {

               $scope.items = updateDataWithSavedInfo(resp.results);
               $scope.nItems = resp.total_results;
               $scope.totalPages = resp.total_pages;

            },
            function (error) {

            }
         );
      }

      if ($scope.isPersistedMovie()) {

         MovieFyApi.getPersistedItems().then(
            function (resp) {

               //debugger;
               $scope.items = updateDataWithSavedInfo(resp);
               $scope.nItems = resp.length;
               $scope.totalPages = resp.length;

            },
            function (error) {

            }
         );
      }
   };

   // main
   loadData();


});
