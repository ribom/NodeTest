var express = require('express');
var searchRouter = express.Router();
var searchPath = '/search';

searchRouter.route('/').get(function (req, res) {
    res.render('search/movieSearch');
});


module.exports = {
    router: searchRouter,
    path: searchPath
};
