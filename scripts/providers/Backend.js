
angular.module("jeviteca").provider("Backend", function() {

   return {

      // Definimos el factory que se inyectará en fase de run.
      $get: ["$http", "$q", function($http, $q) {

         return {

            // get the list of albums
            getAlbums: function() {
               return $http.get("data/albums.json");
            },

            // get the list of albums marked as favourite
            getFavAlbums: function(){

               //debugger;
               var favAlbums = [];
               //debugger;
               if (typeof(Storage) !== "undefined") {

                  favAlbums = JSON.parse(localStorage.getItem("favAlbums"));
               }
               return favAlbums;
            },

            getAlbum: function(idAlbum) {

               var defer = $q.defer();

               $http.get("data/albums.json").then(
                  function (resp) {

                     var item = _.find(resp.data, function(it){ return it.id == idAlbum; }); // con === no lo encuentra
                     if (typeof(item) !== "undefined") {
                        defer.resolve(item);
                     }
                     else {
                        defer.reject(null);
                     }
                  },
                  function (error) {
                     debugger;
                     defer.reject(error);
                  }
               );

               return defer.promise;

            },

            // get the list of bands
            getBands: function() {
               return $http.get("data/bands.json");
            },

            // get the list of bands marked as favourite
            getFavBands: function(){

               //debugger;
               var favBands = [];
               //debugger;
               if (typeof(Storage) !== "undefined") {

                  favBands = JSON.parse(localStorage.getItem("favBands"));
               }
               return favBands;
            },

            getBand: function(idBand) {

               var defer = $q.defer();

               $http.get("data/bands.json").then(
                  function (resp) {

                     var item = _.find(resp.data, function(it){ return it.id == idBand; }); // con === no lo encuentra
                     if (typeof(item) !== "undefined") {
                        defer.resolve(item);
                     }
                     else {
                        defer.reject(null);
                     }
                  },
                  function (error) {
                     debugger;
                     defer.reject(error);
                  }
               );

               return defer.promise;

            },

            // get the list of genres
            getGenres: function() {

               return $http.get("data/genres.json")

            },

            // get the list of genres marked as favourite
            getFavGenres: function(){

               //debugger;
               var favGenres = [];
               //debugger;
               if (typeof(Storage) !== "undefined") {

                  favGenres = JSON.parse(localStorage.getItem("favGenres"));
               }
               return favGenres;
            },

            getGenre: function(idGenre) {

               var defer = $q.defer();

               $http.get("data/genres.json").then(
                  function (resp) {

                     var item = _.find(resp.data, function(it){ return it.id == idGenre; }); // con === no lo encuentra
                     if (typeof(item) !== "undefined") {
                        defer.resolve(item);
                     }
                     else {
                        defer.reject(null);
                     }
                  },
                  function (error) {
                     debugger;
                     defer.reject(error);
                  }
               );

               return defer.promise;

            },

         };
      }]
   };


});