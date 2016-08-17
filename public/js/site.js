$(document).ready(function () {
    $(".site-search").click(function () {
        $('.site-search-input').animate({
            width: 'toggle'
        });
        $('.site-search').toggleClass("button");
    });
});
