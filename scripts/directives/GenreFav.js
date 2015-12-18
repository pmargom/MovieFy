angular.module("jeviteca").directive("genreFav", function() {

   return {
      restrict: "E",
      templateUrl: "views/GenreFav.html",
      scope: {
         genre: "=",
      },
      link: function (scope) {

         scope.markAsFav = function(evento) {

            // Paramos la propagación del evento click para evitar que se dispare el click del elemento <tr>.
            evento.stopPropagation();

            // marcamos el elemento como favorito y lo guardamos en el local storage.
            if (typeof(Storage) !== "undefined") {
               // primero, recupero la lista de de favoritos que ya pudiera existir
               //debugger;
               var favGenres = JSON.parse(localStorage.getItem("favGenres"));
               if (favGenres === null){
                  favGenres = [];
               }
               var item = _.find(favGenres, function(it){ return it.id === scope.genre.id; });
               if (typeof(item) === "undefined"){
                  //debugger;
                  favGenres.push(scope.genre);
               }
               else {
                  //debugger;
                  var index = favGenres.indexOf(item); // en teoría, item es igual que scope.genre. Pero en la práctica no!!!
                  favGenres.splice(index, 1);
               }
               localStorage.setItem("favGenres", JSON.stringify(favGenres));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }

         };

         // comprobar si el genre está marcado como favorito o no
         scope.isFav = function() {

            if (typeof(Storage) !== "undefined") {

               var favGenres = JSON.parse(localStorage.getItem("favGenres"));
               if (favGenres === null){
                  return false;
               }
               var item = _.where(favGenres, {id: scope.genre.id});
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