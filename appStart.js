var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var authRouter = require('./src/routes/authRoutes');

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

require('./src/config/passport')(app);

app.use('/authenticate', authRouter);


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    res.render('index', {
        list: ['o', 'dua']
    });
});

app.get('/secret', function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user);

    res.send(req.user);

});

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});



require('./src/auth/signup')(app);
