var express = require('express');
var memberRouter = express.Router();
var memberPath = '/member';

memberRouter.route('/').get(function (req, res) {
    res.send('You have entered a secure path');
});


module.exports = {
    router: memberRouter,
    path: memberPath
};
