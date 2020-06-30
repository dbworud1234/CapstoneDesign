const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const filestore = require('session-file-store')(session);
const passport = require('passport');
const methodOverride = require('method-override');
require('dotenv').config();

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const createsRouter = require('./routes/creates');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));  //가상경로 설정
app.use(express.static(path.join(__dirname, 'uploads')));  //가상경로 설정
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(session({
  secure : true,  // true -> https로 함.
  HttpOnly : true,  // 자바스크립트로 세션쿠키를 사용할 수 없게 강제함.
  secret : process.env.SESSION_SECRET,  // 노출되면 안됌.
  resave : true,  // false => 세션데이터가 바뀌지 않으면 저장x
  rolling : true,
  saveUninitialized : false,  // true -> 세션이 필요할때 구동.
  // cookie : { maxAge : 1000 * 60 * 30 },  // 세션만료시간 30분
  store : new filestore({ path : './sessions/' })  // 동작하는 방법 바꾸려면 옵션값 추가하면 됌.
}));
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/creates', createsRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

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

module.exports = app;
