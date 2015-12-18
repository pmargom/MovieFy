
angular.module("jeviteca").filter("Instruments", function() {

   return function(collection) {

      return collection.join(", ");

   };

});