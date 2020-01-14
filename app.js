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
app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
    
    bucket: 'bbs-final',                           // required
    region: 'ap-southeast-1',                            // optional
    headers: {'Access-Control-Allow-Origin': '*'},  // optional
    ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
  }));


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
app.get('/*', function(req, res) {
    res.sendfile(path.join(__dirname, 'build', 'index.html'))
});


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