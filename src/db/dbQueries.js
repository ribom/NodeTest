var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
// Connection URL 
var url = 'mongodb://localhost:27017/MyTest';


var addUser = function (userName, password) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var collection = db.collection('users');
        console.log('adding user');
        collection.findOne({
            userName: userName
        }, {}, function (err, user) {
            if (user !== null) {
                console.log('Existing user found');
                db.close();
            } else {
                collection.insertOne({
                    userName: userName,
                    password: password
                }, function (err, res) {
                    db.close();
                });
            }
        });

    });
};


module.exports = {
    addUser: addUser
};
