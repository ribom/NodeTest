angular.module('movieBase').directive('myEnter', function () {
    console.log("created");

    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {

            console.log("keypress");
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
