var sm = require('./signupModel');
var db = require('./../db/userQueries');
var passport = require('passport');

module.exports = function (app) {

    app.post('/signup', function (req, res) {
        var userName = req.body.userName;
        var password = req.body.password;
        db.addUser(userName, password, function (result) {
            var model = sm.createModel(result);

            res.render('signup/signupRes', model);
        });
    });


    app.get('/signup', function (req, res) {
        res.render('signup/signup');
    });


    app.get('/user/:userName', function (req, res) {
        var userName = req.params.userName;

        var user = db.getUser(userName, function (userObj) {
            res.send('You found the user: ' + userObj.password);
        });
    });
};
