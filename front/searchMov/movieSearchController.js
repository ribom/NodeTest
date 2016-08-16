var app = angular.module('search', []);
app.controller('searchCtrl', function ($scope, $http) {
    $scope.movieArray = [];

    var apiKey = 'dc7e3aace683c4dcbc23548159ec3cb3';
    var discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    var imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

    $scope.baseImgUrl = imgUrl;

    $scope.search = function () {
        $http({
            method: 'GET',
            url: discoverUrl + apiKey
        }).
        success(function (data, status, headers, config) {
            $scope.movieArray = data.results;
            console.log($scope.movieArray);
        }).
        error(function (data, status, headers, config) {
            console.log('error: ' + status);
        });
        $scope.word = $scope.term;
    };
});
