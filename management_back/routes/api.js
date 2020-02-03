var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

var db = require('../db/db') // 引入db
var apiSql = require('../db/sql/apiSql') // 引入sql语句

// 小程序登录接口
router.post('/checkUser', function(req, res, next) {
  var password = req.body.password.toUpperCase()
  db.query(apiSql.checkUserByUsername, [req.body.username], function(
    err,
    results
  ) {
    var userauthority = results[0].userauthority
    if (password == results[0].password) {
      // 定义token调用的信息
      const user = results[0]
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
      // console.log(token)
      res.send({
        code: 200,
        msg: '登录成功',
        token: token,
        userauthority: userauthority
      })
    } else {
      res.send({
        code: 404,
        msg: '登录失败',
        token: token,
        userauthority: userauthority
      })
    }
  })
})

// 获取车险人员通讯录
router.get('/getAddressbookVehicleInsurance', function(req, res, next) {
  db.query(apiSql.getAddressbookVehicleInsurance, (err, results) => {
    if (err) {
      res.send({ code: 404, message: '资料不存在', affextedRows: 0 })
    } else {
      console.log(results)
      res.send({ results: results })
    }
  })
})

// 获取车险不同类型的保单列表
router.get('/vehicleInsuranceOrderList', function(req, res, next) {
  var daytype = req.query.daytype
  var name = req.query.name
  if (daytype == 1) {
    // const sqlStr =
    //   "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from `车险` where date<curdate()-interval 90 day && charge=?"
    db.query(apiSql.getInfoByName1, [name], (err, results) => {
      if (err) {
        res.json({
          code: 404,
          message: '资料不存在',
          affextedRows: 0
        })
      } else {
        res.json({
          code: 200,
          message: results,
          affextedRows: results.affextedRows
        })
      }
    })
  } else if (daytype == 2) {
    // const sqlStr =
    //   "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from `车险` where date>curdate()-interval 90 day && date<curdate()-interval 60 day && charge=?"
    db.query(apiSql.getInfoByName2, name, (err, results) => {
      if (err)
        return res.json({
          err_code: 404,
          message: '资料不存在',
          affextedRows: 0
        })
      //加个异常处理
      try {
        var index = 0
        while (index < results.length) {
          //计算日期start
          var time = results[index].date
          var time02 = new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
          //差值 = 当前时间 - 取出来的时间
          var differ = Date.now() - time02
          // console.log(Date.now(),'-',time02,'=',differ);
          var differ = new Date(differ)
          var dt = parseInt(differ / (3600 * 24 * 1000))
          // console.log(dt)
          //计算日期end
          results[index].differ = dt
          index += 1
        }
      } catch (err) {
        // console.log(err)
      }
      res.json({
        code: 200,
        message: results,
        affextedRows: results.affextedRows
      })
    })
  } else if (daytype == 3) {
    // const sqlStr =
    //   "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from `车险` where date>curdate()-interval 60 day && charge=?"
    db.query(apiSql.getInfoByName3, name, (err, results) => {
      if (err)
        return res.json({
          err_code: 404,
          message: '资料不存在',
          affextedRows: 0
        })
      //加个异常处理
      try {
        var index = 0
        while (index < results.length) {
          //计算日期start
          var time = results[index].date
          var time02 = new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
          //差值 = 当前时间 - 取出来的时间
          var differ = Date.now() - time02
          // console.log(Date.now(),'-',time02,'=',differ);
          var differ = new Date(differ)
          var dt = parseInt(differ / (3600 * 24 * 1000))
          // console.log(dt)
          //计算日期end
          results[index].differ = dt
          index += 1
        }
      } catch (err) {
        // console.log(err)
      }
      res.json({
        code: 200,
        message: results,
        affextedRows: results.affextedRows
      })
    })
  }
})

// 车险保单提交审核
router.post('/vehicleOrderComplete', function(req, res, next) {
  var ordernumber = req.body.ordernumber
  // console.log(req.body)
  // console.log(ordernumber)
  db.query(apiSql.vehicleOrderComplete, [ordernumber], (err, results) => {
    if (results.affectedRows == 1) {
      res.json({ code: 200, message: '提交成功' })
    } else {
      res.json({ code: 404, message: '提交失败' })
    }
  })
})

// 获取非车险通讯录
router.get('/getaddressbooknovehicleinsurance', function(req, res, next) {
  const sqlStr = 'SELECT * FROM employee where novehicleinsurancequantity > 0'
  db.query(apiSql.getAddressbookNoVehicleInsurance, (err, results) => {
    if (err) {
      res.json({ code: 404, message: '资料不存在', affextedRows: 0 })
    } else {
      res.json({ results: results })
    }
  })
})

router.post('/novehicleinsuranceorderlist', function(req, res, next) {
  var daytype = req.body.daytype
  var name = req.body.name
  if (daytype == 1) {
    const sqlStr =
      "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from novehicleinsurance where date<curdate()-interval 90 day && charge=?"
    conn.query(sqlStr, name, (err, results) => {
      if (err)
        return res.json({
          err_code: 404,
          message: '资料不存在',
          affextedRows: 0
        })
      res.json({
        code: 200,
        message: results,
        affextedRows: results.affextedRows
      })
    })
  } else if (daytype == 2) {
    const sqlStr =
      "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from novehicleinsurance where date>curdate()-interval 90 day && date<curdate()-interval 60 day && charge=?"
    conn.query(sqlStr, name, (err, results) => {
      if (err)
        return res.json({
          err_code: 404,
          message: '资料不存在',
          affextedRows: 0
        })
      //加个异常处理
      try {
        var index = 0
        while (index < results.length) {
          //计算日期start
          var time = results[index].date
          var time02 = new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
          //差值 = 当前时间 - 取出来的时间
          var differ = Date.now() - time02
          // console.log(Date.now(),'-',time02,'=',differ);
          var differ = new Date(differ)
          var dt = parseInt(differ / (3600 * 24 * 1000))
          // console.log(dt)
          //计算日期end
          results[index].differ = dt
          index += 1
        }
      } catch (err) {
        // console.log(err)
      }
      res.json({
        code: 200,
        message: results,
        affextedRows: results.affextedRows
      })
    })
  } else if (daytype == 3) {
    const sqlStr =
      "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from novehicleinsurance where date>curdate()-interval 60 day && charge=?"
    conn.query(sqlStr, name, (err, results) => {
      if (err)
        return res.json({
          err_code: 404,
          message: '资料不存在',
          affextedRows: 0
        })
      //加个异常处理
      try {
        var index = 0
        while (index < results.length) {
          //计算日期start
          var time = results[index].date
          var time02 = new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
          //差值 = 当前时间 - 取出来的时间
          var differ = Date.now() - time02
          // console.log(Date.now(),'-',time02,'=',differ);
          var differ = new Date(differ)
          var dt = parseInt(differ / (3600 * 24 * 1000))
          // console.log(dt)
          //计算日期end
          results[index].differ = dt
          index += 1
        }
      } catch (err) {
        // console.log(err)
      }
      res.json({
        code: 200,
        message: results,
        affextedRows: results.affextedRows
      })
    })
  }
})

module.exports = router
