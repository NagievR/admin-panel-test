
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const startDB = require('./database/mongo-db');
const adminPanelRouter = require('./admin-panel/index');
const doctorsRouter = require('./routes/doctors.route');
const testsRouter = require('./routes/tests.route');
const adminsRouter = require('./routes/admins.route');
const indexRouter = require('./routes/index');
const fooRouter = require('./routes/foo.route');
const barRouter = require('./routes/bar.route');

const app = express();

// ******** REMOVE IT LATER. !KOSTIL
  // const bcrypt = require('bcrypt');
  // const User = require('./models/User');
  // const x = async() => {
  //   const pass = await bcrypt.hash('1234', 8)
  //   const user = await new User({ email: '1234@qwer.ty', passHashed: pass, role: 'admin' });
  //   user.save();
  // }
  // x()
// ******** /REMOVE IT LATER. !KOSTIL


// admin panel routes
app.use('/admin', adminPanelRouter);

// routes
app.use('/doctors', doctorsRouter);
app.use('/tests', testsRouter);
app.use('/admins', adminsRouter);
app.use('/', indexRouter);
app.use('/foo', fooRouter);
app.use('/bar', barRouter);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// static
app.use(express.static(__dirname + '/public/images'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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

startDB();

module.exports = app;
