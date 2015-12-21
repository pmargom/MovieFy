
angular.module("moviefy").filter("checkResults", function() {

    return function checkResults(items) {

        return items == 0;

    }

});