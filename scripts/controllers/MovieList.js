angular.module("moviefy").controller("MovieListCtrl", function($scope, Movies, $location, $timeout) {


   //debugger;
   var movies = Movies.data.results;
   $scope.nItems = movies.length;

   // Setting up the pagination.
   $scope.pagination = {

      // Page changing.
      pageChange: function() {
         
         // Getting the first and the last item of the page to be shown.
         var first = ($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage;
         var last = first + $scope.pagination.itemsPerPage;
         
         // go to selected view.
         $scope.movies = movies.slice(first, last);
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
      $timeout(function() { $location.path("/movies/details/" + movieId); }, 100);
   };

   // bringing the first page of results
   //$scope.pagination.pageChange();
   $scope.movies = movies

});
