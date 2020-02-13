// Rerquire Node JS module
var express = require('express');
var path = require('path');
var cons = require('consolidate');
var bodyParser = require('body-parser');


// Creat server app
var app = express();

// View engine setup
app.engine('html', cons.swig)
app.set("view engine", "html");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

//body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ----------------- Router ---------------------------------- //

app.get('/', function (req, res) {
    return res.render('index.html');
});


app.get('/about', function (req, res) {
    return res.render('about.html');
});

app.get('/blog', function (req, res) {
    return res.render('blog.html');
});

app.get('/services', function (req, res) {
    return res.render('services.html');
});

app.get('/work', function (req, res) {
    return res.render('work.html');
});

app.get('/work-single', function (req, res) {
    return res.render('work-single.html');
});

app.get('/contact', function (req, res) {
    return res.render('contact.html');
});





// ---------------------------------------------------------- //

// app.use(favicon(__dirname + '/public/image/favicon.ico'));

// Start
app.listen(process.env.PORT || 3000, () => console.log('Server is listenning in port 3000'));
module.exports = app;