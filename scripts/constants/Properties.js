

angular.module("moviefy").constant("Properties", {
   apiKey: "e8c6d35a6bd555573d4b93aff5b6743b",
   //backendUrl: "https://api.themoviedb.org/3/discover",
   backendUrl: "https://api.themoviedb.org/3",
   backendImagesUrl: "https://image.tmdb.org/t/p/w185",
   itemType: {
      Movie: "movie",
      Serie: "tv"
   },
   persistedBackendUrl: "http://pmgdev-i.cloudapp.net/MovieFy/api",
   persistedItemType: {
      Movie: "movies",
      Serie: "series"
   },
   imageNotFound: "no-poster-w185-v2.png"
});