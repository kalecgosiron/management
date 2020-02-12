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
  // 后台更新数据操作
  var noVehicleDic = new Array()
  // 将保单数量重置为0
  db.query(apiSql.resetNoVehicleinsurancequantity, (err, results) => {})
  // 刷新保单数量
  db.query(apiSql.getEmployeeNoVehicleData, (err, results) => {
    // console.log(results)
    for (i = 0; i < results.length; i++) {
      noVehicleDic[results[i].charge] = results[i].count
    }
    // console.log(dic)
    for (var key in noVehicleDic) {
      // console.log('key: ' + key + ' ,value: ' + noVehicleDic[key])
      db.query(
        apiSql.updateEmployeeNoVehicleData,
        [noVehicleDic[key], key],
        (err, results) => {}
      )
    }
  })
  console.log('刷新成功')
  // 后台更新数据操作
  var dic = new Array()
  // 将保单数量重置为0
  db.query(apiSql.resetVehicleinsurancequantity, (err, results) => {})
  // 刷新保单数量
  db.query(apiSql.getEmployeeData, (err, results) => {
    // console.log(results)
    for (i = 0; i < results.length; i++) {
      dic[results[i].charge] = results[i].count
    }
    // console.log(dic)
    for (var key in dic) {
      // console.log('key: ' + key + ' ,value: ' + dic[key])
      db.query(apiSql.updateEmployeeData, [dic[key], key], (err, results) => {})
    }
  })
  console.log('刷新第二个')
})

// 获取车险人员通讯录
router.get('/getAddressbookVehicleInsurance', function(req, res, next) {
  // 获取员工车险资料
  db.query(apiSql.getAddressbookVehicleInsurance, (err, results) => {
    if (err) {
      res.send({ code: 404, message: '资料不存在', affextedRows: 0 })
    } else {
      // console.log(results)
      res.send({ results: results })
    }
  })
})

// 获取车险不同类型的保单列表
router.get('/vehicleInsuranceOrderList', function(req, res, next) {
  var daytype = req.query.daytype
  var name = req.query.name
  if (daytype == 1) {
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
  var username = req.user.username
  var ordernumber = req.body.ordernumber
  db.query(
    apiSql.vehicleOrderComplete,
    [username, ordernumber],
    (err, results) => {
      if (results.affectedRows == 1) {
        res.json({ code: 200, message: '提交成功' })
      } else {
        res.json({ code: 404, message: '提交失败' })
      }
    }
  )
})

// 获取非车险通讯录
router.get('/getaddressbooknovehicleinsurance', function(req, res, next) {
  // const sqlStr = 'SELECT * FROM employee where novehicleinsurancequantity > 0'

  db.query(apiSql.getAddressbookNoVehicleInsurance, (err, results) => {
    if (err) {
      res.json({ code: 404, message: '资料不存在', affextedRows: 0 })
    } else {
      res.json({ results: results })
    }
  })
})

// 获取非车险不同类型的保单列表
router.post('/novehicleinsuranceorderlist', function(req, res, next) {
  var daytype = req.body.daytype
  var name = req.body.name
  if (daytype == 1) {
    // const sqlStr =
    //   "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date<curdate()-interval 90 day && charge=?"
    db.query(apiSql.getInfoByName4, name, (err, results) => {
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
    // const sqlStr =
    //   "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date>curdate()-interval 90 day && date<curdate()-interval 60 day && charge=?"
    db.query(apiSql.getInfoByName5, name, (err, results) => {
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
    //   "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date>curdate()-interval 60 day && charge=?"
    db.query(apiSql.getInfoByName6, name, (err, results) => {
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

// 非车险保单提交审核
router.post('/noVehicleOrderComplete', function(req, res, next) {
  var username = req.user.username
  var ordernumber = req.body.ordernumber
  db.query(
    apiSql.noVehicleOrderComplete,
    [username, ordernumber],
    (err, results) => {
      if (results.affectedRows == 1) {
        res.json({ code: 200, message: '提交成功' })
      } else {
        res.json({ code: 404, message: '提交失败' })
      }
    }
  )
})

module.exports = router
