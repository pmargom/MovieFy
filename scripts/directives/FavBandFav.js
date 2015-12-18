angular.module("jeviteca").directive("favBandFav", function(Backend, $timeout) {

   return {
      restrict: "E",
      templateUrl: "views/FavBandFav.html",
      scope: {
         band: "=",
         onStarChange: "&"
      },
      link: function (scope) {

         //debugger;
         //scope.onStarChange({ idBand: scope.band.id });


         scope.starChanged = function(evento) {

            evento.stopPropagation();
         
            //debugger;
            if (typeof(Storage) !== "undefined") {
         
               // first, load from the fav list from localstorage
               var favBands = JSON.parse(localStorage.getItem("favBands"));
               if (favBands === null){
                  favBands = [];
               }
         
               // second, get the item that will be unmarked as fav
               var item = _.find(favBands, function(it){ return it.id === scope.band.id; });
               if (typeof(item) !== "undefined"){
         
                  //debugger;
                  var index = favBands.indexOf(item); // en teoría, item es igual que scope.band. Pero en la práctica no!!!
                  favBands.splice(index, 1);
               }
               localStorage.setItem("favBands", JSON.stringify(favBands));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }
      
            // notify to the parent element in order to perform task in the controller side
            scope.onStarChange({ idBand: scope.band.id });

         };
      }
   };

});