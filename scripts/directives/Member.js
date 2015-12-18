// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("member", function() {

   return {

      restrict: "E",

      templateUrl: "views/Member.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         member: "="
      }
      
   };
});