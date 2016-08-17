console.log("what");

var app = angular.module('movieBase', []);
app.controller('headerCtrl', function ($scope) {
    $scope.movieArray = [];
    $scope.searchToggle = function () {
        if ($scope.term == "") {
            console.log("empty");

        } else {
            console.log("term:" + $scope.term);

        }
    };
});
