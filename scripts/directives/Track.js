// Directiva que representa cada fila en la lista de álbumes.
angular.module("moviefy").directive("track", function() {

   return {

      restrict: "E",

      templateUrl: "views/Track.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         bandName: "=",
         trackName: "="
      }

   };
});