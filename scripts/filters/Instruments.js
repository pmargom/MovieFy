
angular.module("moviefy").filter("Instruments", function() {

   return function(collection) {

      return collection.join(", ");

   };

});