
// Definición de la aplicación.
angular.module("jeviteca", ["ngRoute", "angular-loading-bar", "ui.bootstrap"]);

// En fase de config, inyectamos $httpProvider para configurar las cabeceras
// por defecto de los distintos métodos HTTP del servicio $http, que usamos
// para pedir los datos al servidor.
angular.module("jeviteca").config(function(BackendProvider, Properties) {

   //BackendProvider.establecerApiKey(Properties.apiKey);
   //BackendProvider.habilitarPeticionesCors();
   //BackendProvider.setUrlBackend(Properties.backendUrl);
});

// En fase de config, inyectamos cfpLoadingBarProvider para configurar
// la barra de progreso que se muestra con las peticiones HTTP.
angular.module("jeviteca").config(function(cfpLoadingBarProvider) {

   cfpLoadingBarProvider.includeSpinner = false;

});

// En fase de config inyectamos $routeProvider para configurar las rutas de la aplicación.
angular.module("jeviteca").config(function($routeProvider) {

   $routeProvider.when("/albums", {
      controller: "AlbumListCtrl",
      templateUrl: "views/AlbumList.html",
      resolve: {
         Albums: ["Backend", function(Backend) {
            return Backend.getAlbums();
         }]
      }
   });

   $routeProvider.when("/albums/favourites", {
      controller: "FavAlbumListCtrl",
      templateUrl: "views/FavAlbumList.html",
      resolve: {
         Albums: ["Backend", function(Backend) {
            return Backend.getFavAlbums();
         }]
      }
   });

   $routeProvider.when("/albums/detalle/:idAlbum", {
      controller: "AlbumDetailsCtrl",
      templateUrl: "views/AlbumDetails.html",
      resolve: {
         Album: ["Backend", "$route", function(Backend, $route) {
            return Backend.getAlbum($route.current.params.idAlbum);
         }]
      }
   });

   $routeProvider.when("/bands", {
      controller: "BandListCtrl",
      templateUrl: "views/BandList.html",
      // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
      
      resolve: {
         Bands: ["Backend", function(Backend) {
            return Backend.getBands();
         }]
      }
   });

   $routeProvider.when("/bands/favourites", {
      controller: "FavBandListCtrl",
      templateUrl: "views/FavBandList.html",
      resolve: {
         Bands: ["Backend", function(Backend) {
            return Backend.getFavBands();
         }]
      }
   });
   
   $routeProvider.when("/bands/detalle/:idBand", {
      controller: "BandDetailsCtrl",
      templateUrl: "views/BandDetails.html",
      resolve: {
         Band: ["Backend", "$route", function(Backend, $route) {
            return Backend.getBand($route.current.params.idBand);
         }]
      }
   });

   $routeProvider.when("/genres", {
      controller: "GenreListCtrl",
      templateUrl: "views/GenreList.html",
      resolve: {
         Genres: ["Backend", function(Backend) {
            return Backend.getGenres();
         }]
      }
   });

   $routeProvider.when("/genres/favourites", {
      controller: "FavGenreListCtrl",
      templateUrl: "views/FavGenreList.html",
      resolve: {
         Genres: ["Backend", function(Backend) {
            return Backend.getFavGenres();
         }]
      }
   });

   $routeProvider.when("/genres/detalle/:idGenre", {
      controller: "GenreDetailsCtrl",
      templateUrl: "views/GenreDetails.html",
      resolve: {
         Genre: ["Backend", "$route", function(Backend, $route) {
            return Backend.getGenre($route.current.params.idGenre);
         }]
      }
   });

   // Configuramos una ruta por defecto.
   $routeProvider.otherwise({
      redirectTo: "/albums"
   });

});