
angular.module("moviefy").filter("buildImage", function(Properties, $location) {

   return function setFullImage(image) {

      //debugger;
      return Properties.backendImagesUrl + image;

   }

});