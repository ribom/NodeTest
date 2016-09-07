angular.module('movieBase').controller('movieSearchCtrl', ['$scope', 'movieService', '$http', function($scope, movieService, $http) {

    $scope.baseImgUrl = movieService.imgUrl;
    $scope.searchQuery = getParameterByName('q');

    $scope.movieArray = [];
    $scope.smallSize = '300';
    $scope.bigSize = '1280';

    if ($scope.searchQuery) {
        movieService.search($scope.searchQuery, function(movieArray) {
            $scope.movieArray = movieArray;
        });
    } else {
        movieService.getMovies(function(movieArray) {
            $scope.movieArray = movieArray;
        });
    }
}]);