var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var orderVerifySql = require('../db/sql/orderVerifySql')

router.get('/noVehicleOrderVerify', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    db.query(orderVerifySql.selectNoVehicleList, [], function(err, results) {
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

router.post('/passNoVehicleOrder', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var ordernumber = req.body.ordernumber
    db.query(
      orderVerifySql.passNoVehicleOrder,
      [req.user.username, ordernumber],
      function(err, results) {
        if (results.affectedRows == 1) {
          res.send({ code: 200, msg: 200 })
        } else {
          res.send({ code: 404, msg: 404 })
        }
      }
    )
  } else {
    res.send({ code: 401, msg: '您没有权限访问' })
  }
})

router.post('/returnNoVehicleOrder', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var ordernumber = req.body.ordernumber
    try {
      db.query(
        orderVerifySql.returnNoVehicleOrder,
        [req.user.username, ordernumber],
        (err, results) => {
          if (results.affectedRows == 1) {
            res.send({ code: 200 })
          } else {
            res.send({ code: 404 })
          }
        }
      )
    } catch (e) {
      res.send({ code: 404 })
    }
  } else {
    res.send({ code: 401, msg: '您没有权限访问' })
  }
})
// -------------------车险非车险分割线--------------------------

router.get('/vehicleOrderVerify', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    db.query(orderVerifySql.selectVehicleList, [], function(err, results) {
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

router.post('/passVehicleOrder', function(req, res, next) {
  console.log(req.user)
  var ordernumber = req.body.ordernumber
  db.query(
    orderVerifySql.passVehicleOrder,
    [req.user.username, ordernumber],
    function(err, results) {
      if (results.affectedRows == 1) {
        res.send({ code: 200, msg: 200 })
      } else {
        res.send({ code: 404, msg: 404 })
      }
    }
  )
})

router.post('/returnVehicleOrder', function(req, res, next) {
  var ordernumber = req.body.ordernumber
  try {
    db.query(
      orderVerifySql.returnVehicleOrder,
      [req.user.username, ordernumber],
      (err, results) => {
        if (results.affectedRows == 1) {
          res.send({ code: 200 })
        } else {
          res.send({ code: 404 })
        }
      }
    )
  } catch (e) {
    res.send({ code: 404 })
  }
})

module.exports = router
