var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./app/models/book');

var routes = require('./app/routes/index');
var users = require('./app/routes/users');

var app = express();
var db = require('./config/db');

mongoose.connect(db.url);//搞毛，不能用localhost

// view engine setup
app.set('views', path.join(__dirname, 'public/'));//index模版的路径
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//设定静态文件的根目录

app.use('/', routes);
app.use('/users', users);

app.listen(3002);
console.log('Express server started on port 3002');


module.exports = app;
