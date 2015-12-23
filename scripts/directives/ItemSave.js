
angular.module("moviefy").directive("itemSave", function(Properties, MovieFyApi) {

    return {

        restrict: "E",

        templateUrl: "views/ItemSave.html",

        scope: {
            item: "="
        },

        link: function(scope) {

            scope.save = function (event) {

                event.stopPropagation();
                alert('Saving');

            };

            scope.isPersisted = function () {

               // debugger;
                return scope.item.IsSaved;

            };

        }
    };
});
