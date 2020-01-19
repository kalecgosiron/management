var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var ejs = require('ejs')
var expressJwt = require('express-jwt')
// 模块路径导入
var user = require('./routes/user')
var captext = require('./routes/captext')
var home = require('./routes/home')
var newOrder = require('./routes/newOrder')
var upload = require('./routes/upload')
// express
var app = express()

// 跨域
app.use((req, res, next) => {
  // 设置是否运行客户端设置 withCredentials
  // 即在不同域名下发出的请求也可以携带 cookie
  res.header('Access-Control-Allow-Credentials', true)
  // 第二个参数表示允许跨域的域名，* 代表所有域名
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS') // 允许的 http 请求的方法
  // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )
  if (req.method == 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express)
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//中间件
//jwt
app.use(
  expressJwt({
    secret: 'xIandsan' // 签名的密钥 或 PublicKey
  }).unless({
    path: ['/user/checkUser', '/captext/getCaptcha', '/captext/createCapthca'] // 指定路径不经过 Token 解析
  })
)

// 导入路径
app.use('/user', user)
app.use('/captext', captext)
app.use('/home', home)
app.use('/newOrder', newOrder)
app.use('/upload', upload)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  // res.render('error');
  res.send({ code: 500, msg: '接口异常' })
})

module.exports = app
