
angular.module("jeviteca").filter("albumFirmaBis", function() {

   return function(band, year) {

      return band.name + " - " + year;
   };
});