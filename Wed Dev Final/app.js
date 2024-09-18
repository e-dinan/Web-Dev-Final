// We're installing the necassary libraries for Express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');

let connectionStr = "mongodb+srv://ECCS2441Students:qmqW0yC9Fz3Yxpd@expressdb.rhdtl9l.mongodb.net/?retryWrites=true&w=majority";  //"mongodb+srv://edinan:MerzandNash!@eccs2441.a4nmzzh.mongodb.net/";

// This is installing the controllers for the index and user page
// index: the default page when you visit a website (google.com, amazon.com)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scheduleRouter = require('./routes/schedule');
var syllabusRouter = require('./routes/syllabus');
var studyRouter = require('./routes/study');

// This object IS your server
// This is a full module, view, controller all in one object (MVC)
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Beyond the scope of this class (Ignore this)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// This is where we register routes
// /users will show a different interface
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/schedule', scheduleRouter);
app.use('/syllabus', syllabusRouter);
app.use('/study', studyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// set up Mongo and Mongoose
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionStr);
}

module.exports = app;

