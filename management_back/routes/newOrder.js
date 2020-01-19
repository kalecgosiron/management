var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var newOrderSql = require('../db/sql/newOrderSql')

router.post('/newVehicleOrder', function(req, res, next) {
  var ordernumber = req.body.ordernumber
  var insured = req.body.insured
  var licenseplate = req.body.licenseplate
  var date = req.body.date
  var orderprintnumber = req.body.orderprintnumber
  var attributiondepartment = req.body.attributiondepartment
  var charge = req.body.charge
  var dispatchclerk = req.body.dispatchclerk
  var createtime = new Date()
  createtime.toLocaleString() //获取日期与时间
  var createuser = req.user.username
  if (req.body.ordersignature === undefined) {
    var ordersignature = '欠缺'
  } else {
    var ordersignature = '不欠缺'
    console.log(req.body.ordersignature)
  }
  db.query(
    newOrderSql.newVehicleOrder,
    [
      ordernumber,
      insured,
      licenseplate,
      ordersignature,
      charge,
      date,
      dispatchclerk,
      orderprintnumber,
      attributiondepartment,
      createtime,
      createuser
    ],
    function(err, results) {
      if (err) {
        res.send({ code: 404, msg: '数据库内已存在相同记录的保单号' })
        console.log(err.sqlMessage)
      } else if (results.affectedRows == 1) {
        res.send({ code: 200, msg: '新建保单成功' })
      }
    }
  )
})

module.exports = router
