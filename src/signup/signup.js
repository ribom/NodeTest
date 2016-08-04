var bodyParser = require('body-parser');
var db = require('./../db/userQueries');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/signup', function (req, res) {
        var userName = req.body.userName;
        var password = req.body.password;
        db.addUser(userName, password);
        res.send('You added the user "' + req.body.userName + '" to the database');
    });

    app.get('/user/:userName', function (req, res) {
        var userName = req.params.userName;


        var user = db.getUser(userName, function (userObj) {
            res.send('You found the user: ' + userObj.password);
        });

    });
};
