
angular.module("jeviteca").filter("BandInfo", function(Properties) {

   return function getWikipediaLink(bandName) {

      //debugger;
      var query = encodeURIComponent(bandName);
      return Properties.urlSearchWiki + query;

   }

});