var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var db = require('./../../db/userQueries');

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        },
        function (username, password, done) {

            db.getUser(username, function (user) {
                if (user.password === password) {
                    done(null, user);
                } else {
                    done(null, false, {
                        message: 'Invalid password'
                    });
                }
            });

        }
    ));
};
