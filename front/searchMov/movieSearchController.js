angular.module('movieBase').controller('movieSearchCtrl', ['$scope', 'movieService', '$http', function ($scope, movieService, $http) {

    $scope.baseImgUrl = movieService.imgUrl;
    $scope.searchQuery = getParameterByName('q');

    $scope.movieArray = [];
    $scope.smallSize = '300';
    $scope.bigSize = '1280';

    movieService.getMovies(function (movieArray) {
        $scope.movieArray = movieArray;
    });

}]);
