angular.module("jeviteca").directive("favGenreFav", function() {

   return {
      restrict: "E",
      templateUrl: "views/FavGenreFav.html",
      scope: {
         genre: "=",
         onStarChange: "&"
      },
      link: function (scope) {

         scope.starChanged = function(evento) {

            evento.stopPropagation();
         
            //debugger;
            if (typeof(Storage) !== "undefined") {
         
               // first, load from the fav list from localstorage
               var favGenres = JSON.parse(localStorage.getItem("favGenres"));
               if (favGenres === null){
                  favGenres = [];
               }
         
               // second, get the item that will be unmarked as fav
               var item = _.find(favGenres, function(it){ return it.id === scope.genre.id; });
               if (typeof(item) !== "undefined"){
         
                  //debugger;
                  var index = favGenres.indexOf(item); // en teoría, item es igual que scope.genre. Pero en la práctica no!!!
                  favGenres.splice(index, 1);
               }
               localStorage.setItem("favGenres", JSON.stringify(favGenres));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }
      
            // notify to the parent element in order to perform task in the controller side
            scope.onStarChange({ idGenre: scope.genre.id });

         };
      }
   };

});