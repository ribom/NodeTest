angular.module('movieBase').controller('headerCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.term = "";
    $scope.searchToggle = function () {
        if ($scope.term != "") {
            $window.location.href = '/search/?q=' + encodeURIComponent($scope.term);
        }
    };

    $scope.keyFunc = function (keyEvent) {
        if (keyEvent.which === 13) {
            $scope.searchToggle();
        }
    };
}]);
