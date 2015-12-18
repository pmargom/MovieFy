
angular.module("jeviteca").filter("TrackVideo", function(Properties) {

   return function getYouTubeLink(bandName,	trackName) {
      //debugger;
      var query	= encodeURIComponent((bandName + " " +	trackName).toLowerCase());
      return Properties.urlSearchVideo + query;
   };

});