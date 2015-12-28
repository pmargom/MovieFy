
angular.module("moviefy").filter("buildImage", function($location, Properties) {

   return function setFullImage(image) {

      if (image == null) {
         return "images/" + Properties.imageNotFound;
      }


      return Properties.backendImagesUrl + image;

   }

});