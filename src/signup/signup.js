var bodyParser = require('body-parser');
var db = require('./../db/dbQueries');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/signup', function (req, res) {
        var userName = req.body.userName;
        var password = req.body.password;
        console.log('connecting to db');
        db.addUser(userName, password);  
        res.send('You added the user "' + req.body.userName + '" to the database');
    });
};
