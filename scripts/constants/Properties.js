
// En los constants y values definimos las propiedades de la aplicación.
// Usamos constant en este caso porque necesito inyectarlo en fase de config.
angular.module("jeviteca").constant("Properties", {
   albums: "/data/albums.json",
   bands: "/data/bands.json",
   genres: "/data/genres.json",
   urlSearchVideo: "https://www.youtube.com/results?search_query=", // por si en el futuro cambiamos, por ejemplo, a vimeo
   urlSearchMembers: "https://www.google.es/search?q=",
   urlSearchWiki: "https://es.wikipedia.org/wiki/Special:Search?search="
});