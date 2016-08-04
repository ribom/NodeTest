var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

//app.use(cookieParser); not needed for session anymore?
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'gman',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        list: ['one', 'two', 'three']
    });
});

app.get('/test', function (req, res) {
    res.send('Heeey test');
});

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});

require('./src/signup/signup')(app);
