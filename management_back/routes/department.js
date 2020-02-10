var express = require('express')
var router = express.Router()

var db = require('../db/db') // 引入db
var departmentSql = require('../db/sql/departmentSql') // 引入sql语句

router.post('/getDepartmentVehicleOrder', function(req, res, next) {
  if (req.user.authority == 'departmentmanagement') {
    var department = req.user.department
    db.query(departmentSql.getVehicleOrderBydepartment, [department], function(
      err,
      results
    ) {
      if (err) {
        res.send({ code: 404 })
      } else {
        res.send({ code: 0, data: results })
      }
    })
  } else {
    res.send({ code: 401 })
  }
})

router.post('/getDepartmentNoVehicleOrder', function(req, res, next) {
  if (req.user.authority == 'departmentmanagement') {
    var department = req.user.department
    db.query(
      departmentSql.getNoVehicleOrderrBydepartment,
      [department],
      function(err, results) {
        if (err) {
          res.send({ code: 404 })
        } else {
          res.send({ code: 0, data: results })
        }
      }
    )
  } else {
    res.send({ code: 401 })
  }
})

router.post('/getMemberList', function(req, res, next) {
  if (req.user.authority == 'departmentmanagement') {
    var department = req.user.department
    db.query(departmentSql.getMemberList, [department], function(err, results) {
      if (err) {
        res.send({ code: 404 })
      } else {
        res.send({ code: 0, data: results })
      }
    })
  } else {
    res.send({ code: 401 })
  }
})

module.exports = router
