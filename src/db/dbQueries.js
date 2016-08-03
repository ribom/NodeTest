var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
// Connection URL 
var url = 'mongodb://localhost:27017/MyTest';

var startMongoDb = function () {
    // Use connect method to connect to the Server 

};

var insertDocuments = function () {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        _insertDocs(db, function () {
            db.close();
        });

        db.close();
    });
};

var addUser = function (userName, password) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var existingUser = false;
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
                    console.log('user added, result:' + res + ", username: " + userName + ", password: " + password);
                    db.close();
                });
            }
        });

    });
};

var getDocuments = function (id) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        _getDoc(id, db, function () {
            db.close();
        });

        db.close();
    });
};

var _getDoc = function (id, db, callback) {
    var collection = db.collection('documents');
    /*    collection.findOne({a:})*/
};

var _insertDocs = function (db, callback) {
    // Get the documents collection 
    var collection = db.collection('documents');
    // Insert some documents 
    collection.insertMany([
        {
            a: 1
            }, {
            a: 2
            }, {
            a: 3
            }
], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
};

module.exports = {
    startMongoDb: startMongoDb,
    insertDocuments: insertDocuments,
    addUser: addUser
};
