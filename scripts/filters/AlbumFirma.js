
angular.module("moviefy").filter("albumFirmaBis", function() {

   return function(band, year) {

      return band.name + " - " + year;
   };
});