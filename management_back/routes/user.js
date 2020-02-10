var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

var db = require('../db/db') // 引入db
var userSql = require('../db/sql/userSql') // 引入sql语句

var random = require('string-random')

router.post('/checkUser', function(req, res, next) {
  var password = req.body.password.toUpperCase()
  var captext = req.body.captcha
  db.query(userSql.checkCaptextByUuid, [req.body.uuid], function(err, results) {
    if (results[0].captext === '') {
      res.send({ code: 404, msg: '验证码错误' })
    } else if (captext == results[0].captext) {
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
                    authority: user.userauthority,
                    department: user.department
                  },
                  'xIandsan',
                  { expiresIn: 3600 * 24 }
                )
              // console.log(token)
              res.send({
                code: 200,
                msg: '登录成功',
                token: token,
                userauthority: userauthority
              })
            }
          })
        } else {
          res.send({ code: 404, msg: '用户名或密码错误' })
        }
      })
    } else {
      res.send({ code: 404, msg: '验证码错误' })
    }
  })
})

router.post('/getUserList', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    db.query(userSql.getUserList, [], function(err, results) {
      if (err) {
        res.send({ code: 404 })
      } else {
        res.send({ code: 0, count: results[1][0].count, data: results[0] })
      }
    })
  } else {
    res.send({ code: 401, msg: '您没有权限访问' })
  }
})

router.post('/deleteUser', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var userid = req.body.userid
    var userauthority = req.body.userauthority
    if (userauthority == 'documentpost' || userauthority == 'superadmin') {
      res.send({ code: 401, msg: '该账户不能删除' })
    } else {
      db.query(userSql.deleteUserByUserid, [userid], function(err, results) {
        if (err) {
          res.send({ code: 404 })
        } else {
          res.send({ code: 200, msg: '删除成功' })
        }
      })
    }
  } else {
    res.send({ code: 401, msg: '您没有权限访问' })
  }
})

router.post('/changeUser', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    console.log(req.body)
    db.query(
      userSql.changeUserByUserid,
      [req.body.department, req.body.userauthority, req.body.userid],
      function(err, results) {
        if (err) {
          res.send({ code: 404 })
        } else {
          res.send({ code: 200, msg: '修改成功' })
        }
      }
    )
  } else {
    res.send({ code: 401, msg: '您没有权限修改' })
  }
})

router.post('/newUser', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password.toUpperCase()
  var userauthority = req.body.userauthority
  var department = req.body.department
  var userid = random(10)
  var jointime = new Date()
  jointime.toLocaleString() //获取日期与时间
  db.query(userSql.checkUserid, [userid], function(err, results) {
    console.log(err)
    console.log(results[0].count)
    if (results[0].count >= 1) {
      var userid = random(10)
    }
  })
  db.query(
    userSql.createUser,
    [username, password, userauthority, department, userid, jointime],
    function(err, results) {
      if (err) {
        res.send({ code: 404 })
      } else {
        res.send({ code: 200 })
      }
    }
  )
})

// 修改密码
router.post('/changePassword', function(req, res, next) {
  var userid = req.user.userid
  var oldPassword = req.body.oldPassword
  var password = req.body.password.toUpperCase()
  var repassword = req.body.repassword
  db.query(userSql.checkPasswordByUserid, [userid], function(err, results) {
    if (err) {
      res.send({ code: 404, msg: '修改密码失败' })
    } else {
      if ((oldPassword = results[0].password)) {
        db.query(userSql.changePassword, [password, userid], function(
          err,
          results
        ) {
          if (err) {
            res.send({ code: 404, msg: '修改密码失败' })
          } else {
            res.send({ code: 200, msg: '修改密码成功' })
          }
        })
      }
    }
  })
})

module.exports = router
