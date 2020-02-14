var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var getDataSql = require('../db/sql/getDataSql')

router.post('/getVehicleOutTime', function(req, res, next) {
  console.log(req.body)
  var date = req.body.date
  db.query(getDataSql.getVehicleOutTime, [date], function(err, results) {
    if (err) {
      res.send({
        code: 500,
        msg: '获取资料失败'
      })
    } else {
      res.send({ code: 0, data: results })
    }
  })
})

router.post('/getNoVehicleOutTime', function(req, res, next) {
  var date = req.body.date
  db.query(getDataSql.getNoVehicleOutTime, [date], function(err, results) {
    if (err) {
      res.send({
        code: 500,
        msg: '获取资料失败'
      })
    } else {
      res.send({ code: 0, data: results })
    }
  })
})

module.exports = router
