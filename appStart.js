var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index', {list: ['one', 'two', 'three']});
});

app.get('/test', function (req, res) {
    res.send('Heeey test');
});

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});
