
angular.module("moviefy").controller("BandDetailsCtrl", function($scope, Band) {

   //debugger;
   $scope.band = Band;

   $scope.volver = function() {

      history.back();

   };

});