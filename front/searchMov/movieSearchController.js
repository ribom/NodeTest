angular.module('movieBase').controller('movieSearchCtrl', ['$scope', '$http', function ($scope, $http) {
    var apiKey = 'api_key=dc7e3aace683c4dcbc23548159ec3cb3';
    var discoverUrl = 'https://api.themoviedb.org/3/discover/movie?';
    var searchUrl = 'https://api.themoviedb.org/3/search/movie?';
    var imgUrl = 'https://image.tmdb.org/t/p/w';

    $scope.movieArray = [];
    $scope.smallSize = '300';
    $scope.bigSize = '1280';
    $scope.baseImgUrl = imgUrl;
    $scope.searchQuery = getParameterByName('q');

    $scope.getMovies = function () {
        $http({
            method: 'GET',
            url: discoverUrl + apiKey
        }).
        success(function (data, status, headers, config) {
            $scope.movieArray = data.results.slice(0, 5);
            console.log($scope.movieArray);
        }).
        error(function (data, status, headers, config) {
            console.log('error: ' + status);
        });
        $scope.word = $scope.term;
    };

    $scope.search = function () {
        if ($scope.searchQuery !== null || $scope.searchQuery !== '') {
            $http({
                method: 'GET',
                url: searchUrl + 'query=' + encodeURIComponent($scope.searchQuery) + '&' + apiKey
            }).
            success(function (data, status, headers, config) {
                $scope.movieArray = data.results;
                console.log($scope.movieArray);
            }).
            error(function (data, status, headers, config) {
                console.log('error: ' + status);
            });
        }
    };

    $scope.getMovies();
}]);
