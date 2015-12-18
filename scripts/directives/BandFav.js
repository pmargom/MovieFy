angular.module("jeviteca").directive("bandFav", function() {

   return {
      restrict: "E",
      templateUrl: "views/BandFav.html",
      scope: {
         band: "=",
      },
      link: function (scope) {

         scope.markAsFav = function(evento) {

            //debugger;
            // Paramos la propagación del evento click para evitar que se dispare el click del elemento <tr>.
            evento.stopPropagation();

            // marcamos el elemento como favorito y lo guardamos en el local storage.
            if (typeof(Storage) !== "undefined") {
               // primero, recupero la lista de de favoritos que ya pudiera existir
               //debugger;
               var favBands = JSON.parse(localStorage.getItem("favBands"));
               if (favBands === null){
                  favBands = [];
               }
               var item = _.find(favBands, function(it){ return it.id === scope.band.id; });
               if (typeof(item) === "undefined"){
                  //debugger;
                  favBands.push(scope.band);
               }
               else {
                  //debugger;
                  var index = favBands.indexOf(item); // en teoría, item es igual que scope.band. Pero en la práctica no!!!
                  favBands.splice(index, 1);
               }
               localStorage.setItem("favBands", JSON.stringify(favBands));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }

         };

         // comprobar si el band está marcado como favorito o no
         scope.isFav = function() {

            if (typeof(Storage) !== "undefined") {

               var favBands = JSON.parse(localStorage.getItem("favBands"));
               if (favBands === null){
                  return false;
               }
               var item = _.where(favBands, {id: scope.band.id});
               return item.length !== 0;
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
               return false;
            }
         };

      }
   };

});