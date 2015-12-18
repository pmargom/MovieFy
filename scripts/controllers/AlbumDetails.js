
angular.module("jeviteca").controller("AlbumDetailsCtrl", function($scope, Album) {

   //debugger;
   $scope.album = Album;

   $scope.volver = function() {

      history.back();

   };

   $scope.getYouTubeLink = function(bandName,	trackName) {
      var	query	= encodeURIComponent((bandName	+ "	" +	trackName).toLowerCase());
      return "https://www.youtube.com/results?search_query=" +	query;
   }

});