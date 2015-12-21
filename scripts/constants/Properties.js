

angular.module("moviefy").constant("Properties", {
   apiKey: "e8c6d35a6bd555573d4b93aff5b6743b",
   backendUrl: "https://api.themoviedb.org/3/discover",
   backendImagesUrl: "https://image.tmdb.org/t/p/w185",
   itemType: {
      Movie: "movie",
      Serie: "tv"
   },
   movieFyUrl: "http://pmgdev-i.cloudapp.net/MovieFy/api"
});