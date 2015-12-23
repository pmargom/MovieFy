
angular.module("moviefy").factory("_", function() {
    return window._; // assumes underscore has already been loaded on the page
});


angular.module("moviefy").service("MovieFyApi", function($location, Properties, $http, $q) {

    this.CheckIsSaved = function(id) {

        var itemTypeApi = $location.$$path.indexOf("movies") > -1 ? Properties.persistedItemType.Movie : Properties.persistedItemType.Serie;
        var fullUrlApi = Properties.persistedBackendUrl + "/" + itemTypeApi + "/" + id;

        var defer = $q.defer();

        $http.get(fullUrlApi).then(
            function (resp) {
                defer.resolve(resp.data.id !== -1);
            },
            function (error) {
                defer.resolve(false);
            }
        );

        return defer.promise;

    }
});

