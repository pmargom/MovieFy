// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("band", function() {

   return {

      restrict: "E",

      templateUrl: "views/Band.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         name: "="
      }
      
   };
});