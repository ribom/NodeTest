var express = require('express');
var authRouter = express.Router();
var login = require('./../auth/login');
var passport = require('passport');

authRouter.route('/signUp').post(function (req, res) {
    console.log(req.body);
    req.login(req.body, function () {
        res.redirect('/auth/profile');
    });
});
authRouter.route('/profile').get(function (req, res) {
    res.json(req.user);
});

authRouter.route('/login')
    .get(function (req, res) {

        res.render('login/login');
    })
    .post(passport.authenticate('local', {
        failureRedirect: '/authenticate/login'
    }), function (req, res) {
        res.render('signup/signup');
    });

authRouter.route('/logout').get(function (req, res) {
    req.logout();
    res.redirect('/');
});
module.exports = authRouter;
