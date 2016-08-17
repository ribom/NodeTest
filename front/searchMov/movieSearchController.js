angular.module('movieBase').controller('mostPopCtrl', ['$scope', '$http', function($scope, $http) {
    var apiKey = 'dc7e3aace683c4dcbc23548159ec3cb3';
var discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
var imgUrl = 'https://image.tmdb.org/t/p/w1280/';
    
    $scope.movieArray = [];
    $scope.baseImgUrl = imgUrl;
    console.log("yes");
    var getMovies = function () {
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
    getMovies();
}]);
