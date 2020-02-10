var express = require('express')
var router = express.Router()
var random = require('string-random')

var db = require('../db/db') // 引入db
var employeeSql = require('../db/sql/employeeSql') // 引入sql语句

// 获取所有员工信息
router.post('/getAllEmployee', function(req, res, next) {
  var department = req.user.department
  db.query(employeeSql.getAllEmployee, [], function(err, results) {
    console.log(results)
    if (err) {
      res.send({ code: 404 })
    } else {
      res.send({ code: 0, data: results })
    }
  })
})

// 删除员工信息
router.post('/deleteEmployee', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var employeeid = req.body.employeeid
    db.query(employeeSql.deleteEmployeeByEmployeeid, [employeeid], function(
      err,
      results
    ) {
      if (err) {
        res.send({ code: 404 })
      } else {
        res.send({ code: 200, msg: '删除成功' })
      }
    })
  } else {
    res.send({ code: 401, msg: '您没有权限访问' })
  }
})

// 新建员工
router.post('/newEmployee', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    console.log(req.body)
    var name = req.body.name
    var department = req.body.department
    var employeeid = random(10)
    var createtime = new Date()
    createtime.toLocaleString() //获取日期与时间
    db.query(employeeSql.checkEmployeeid, [employeeid], function(err, results) {
      if (results[0].count >= 1) {
        console.log(err)
        console.log(results)
        var employeeid = random(10)
      }
    })
    db.query(
      employeeSql.createEmployee,
      [employeeid, name, department, createtime],
      function(err, results) {
        console.log(err)
        console.log(results)
        if (err) {
          res.send({ code: 404 })
        } else {
          res.send({ code: 200 })
        }
      }
    )
  } else {
    res.send({ code: 401, msg: '您没有权限访问' })
  }
})

module.exports = router
