angular.module("jeviteca").directive("favAlbumFav", function(Backend, $timeout) {

   return {
      restrict: "E",
      templateUrl: "views/FavAlbumFav.html",
      scope: {
         album: "=",
         onStarChange: "&"
      },
      link: function (scope) {

         //debugger;
         //scope.onStarChange({ idAlbum: scope.album.id });


         scope.starChanged = function(evento) {

            evento.stopPropagation();
         
            //debugger;
            if (typeof(Storage) !== "undefined") {
         
               // first, load from the fav list from localstorage
               var favAlbums = JSON.parse(localStorage.getItem("favAlbums"));
               if (favAlbums === null){
                  favAlbums = [];
               }
         
               // second, get the item that will be unmarked as fav
               var item = _.find(favAlbums, function(it){ return it.id === scope.album.id; });
               if (typeof(item) !== "undefined"){
         
                  //debugger;
                  var index = favAlbums.indexOf(item); // en teoría, item es igual que scope.album. Pero en la práctica no!!!
                  favAlbums.splice(index, 1);
               }
               localStorage.setItem("favAlbums", JSON.stringify(favAlbums));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }
      
            // notify to the parent element in order to perform task in the controller side
            scope.onStarChange({ idAlbum: scope.album.id });

         };
      }
   };

});