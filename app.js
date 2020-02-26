var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const urlmogodb= require('./config/config')
const mongoose=require('mongoose')
var app = express();
var session=require('express-session')


// view engine setup
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  
    maxAge:60000000*60
  }))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));


(async()=>
await mongoose.connect(urlmogodb.urlMongoodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
      console.log('mongodb connect')
  })
)()

app.use('/',indexRouter)
app.use('/',usersRouter)
app.use('/',require('./routes/controller'))
/*app.get('/*', function(req, res) {
    res.sendfile(path.join(__dirname, 'build', 'index.html'))
});*/


app.use(function(req, res, next) {
    next(createError(404));
});
app.use('/index', indexRouter);
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