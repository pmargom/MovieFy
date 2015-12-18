
angular.module("moviefy").filter("buildImage", function(Properties) {

   return function setFullImage(image) {

      //debugger;
      return Properties.backendImagesUrl + image;

   }

});