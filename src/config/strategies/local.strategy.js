var passport = require('passport'),
    LocalStrategy = require('pasport-local').Strategy;

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: '',
            passwordField: ''
        },
        function (username, password, done) {
        var user = {
            username: username,
            password: password
        };
        done(null, user);
    }));
};
