angular.module('movieBase').factory('movieService', function ($http) {
    var apiKey = 'api_key=dc7e3aace683c4dcbc23548159ec3cb3';
    var discoverUrl = 'https://api.themoviedb.org/3/discover/movie?';
    var searchUrl = 'https://api.themoviedb.org/3/search/movie?';
    var imgUrl = 'https://image.tmdb.org/t/p/w';

    var smallSize = '300';
    var bigSize = '1280';


    var getMovies = function (cb) {
        var movieArray = [];
        $http({
            method: 'GET',
            url: discoverUrl + apiKey
        }).
        success(function (data, status, headers, config) {
            movieArray = data.results.slice(0, 5);
            cb(movieArray);
            console.log(movieArray);
        }).
        error(function (data, status, headers, config) {
            console.log('error: ' + status);
        });
    };

    var search = function () {
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


    return {
        getMovies: getMovies,
        search: search,
        imgUrl: imgUrl
    };
});
