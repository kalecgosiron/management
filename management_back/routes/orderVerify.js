var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var orderVerifySql = require('../db/sql/orderVerifySql')

router.get('/NoVehicleOrderVerify', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    db.query(orderVerifySql.selectList, [], function(err, results) {
      if (err) {
        res.json({ code: 404 })
      } else {
        res.json({ code: 200, count: results[1][0].count, data: results[0] })
      }
    })
  } else {
    res.json({ code: 401, msg: '您没有权限访问' })
  }
})
module.exports = router
