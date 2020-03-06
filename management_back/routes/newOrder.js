var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var newOrderSql = require('../db/sql/newOrderSql')

router.post('/newVehicleOrder', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
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
          res.send({
            code: 500,
            msg: '新建保单失败，请检查您填写的信息是否正确'
          })
          console.log(err.sqlMessage)
        } else if (results.affectedRows == 1) {
          res.send({ code: 200, msg: '新建保单成功' })
        }
      }
    )
  } else {
    res.send({ code: 401, msg: '您没有权限进行此操作' })
  }
})

router.post('/newNoVehicleOrder', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var ordernumber = req.body.ordernumber
    var applicant = req.body.applicant
    var charge = req.body.charge
    var date = req.body.date
    var dispatchclerk = req.body.dispatchclerk
    var orderprintnumber = req.body.orderprintnumber
    var attributiondepartment = req.body.attributiondepartment
    var createtime = new Date()
    createtime.toLocaleString() //获取日期与时间
    var createuser = req.user.username
    if (req.body.ordersignature === undefined) {
      var ordersignature = '欠缺'
    } else {
      var ordersignature = '不欠缺'
    }
    if (req.body.id_card === undefined) {
      var id_card = '欠缺'
    } else {
      var id_card = '不欠缺'
    }
    if (req.body.aml === undefined) {
      var aml = '欠缺'
    } else {
      var aml = '不欠缺'
    }
    if (req.body.special_business_materials === undefined) {
      var special_business_materials = '欠缺'
    } else {
      var special_business_materials = '不欠缺'
    }
    db.query(
      newOrderSql.newNoVehicleOrder,
      [
        ordernumber,
        applicant,
        ordersignature,
        id_card,
        aml,
        special_business_materials,
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
          res.send({
            code: 500,
            msg: '新建保单失败，请检查您填写的信息是否正确'
          })
          console.log(err.sqlMessage)
        } else if (results.affectedRows == 1) {
          res.send({ code: 200, msg: '新建保单成功' })
        }
      }
    )
  } else {
    res.send({ code: 401, msg: '您没有权限进行此操作' })
  }
})

module.exports = router
