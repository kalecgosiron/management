var express = require('express')
var router = express.Router()
var moment = require('moment')
var jwt = require('jsonwebtoken')

var db = require('../db/db') // 引入db
var userSql = require('../db/sql/userSql') // 引入sql语句

// router.get('/getAllUsers', function(req, res, next) {
//   console.log(req.user)
//   res.send({ code: 200, msg: '查询成功', count: 1, data: 'data' })
// })

router.post('/checkUser', function(req, res, next) {
  console.log(req.body)
  var password = req.body.password.toUpperCase()
  console.log(password)
  var captext = req.body.captcha
  db.query(userSql.checkCaptextByUuid, [req.body.uuid], function(err, results) {
    if (captext == results[0].captext) {
      db.query(userSql.checkUserByUsername, [req.body.username], function(
        err,
        results
      ) {
        var userauthority = results[0].userauthority
        if (password == results[0].password) {
          // 定义token调用的信息
          const user = results[0]
          db.query(userSql.deleteCaptextByUuid, [req.body.uuid], function(
            err,
            results
          ) {
            if (results.affectedRows == 1) {
              // token 方法
              const token =
                'Bearer ' +
                jwt.sign(
                  {
                    username: user.username,
                    userid: user.userid,
                    authority: user.userauthority
                  },
                  'xIandsan',
                  { expiresIn: 3600 * 24 }
                )
              res.send({
                code: 200,
                msg: '登录成功',
                token: token,
                userauthority: userauthority
              })
            }
          })
        } else {
          console.log('登录失败')
          res.send({ code: 401, msg: '登录失败' })
        }
      })
    } else {
      res.send({ code: 401, msg: '登录失败' })
    }
  })
})

module.exports = router
