var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db

var formidable = require('formidable')
var node_xlsx = require('node-xlsx')

router.post('/uploadVehicle', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 设置编码
    form.uploadDir = './upload/' // 设置上传目录
    form.keepExtensions = true // 保留后缀
    form.maxFieldsSize = 5 * 1024 * 1024 // 文件大小上限设置为5M
    form.parse(req, async function(err, fields, files) {
      if (err) {
        res.send({
          code: 400,
          msg: '上传文件错误'
        })
      } else {
        const xlsxfile = files.excel.path
        async function analysisdata() {
          return new Promise((resolve, reject) => {
            //解析xlsx
            let obj = node_xlsx.parse(xlsxfile)
            resolve(obj)
          })
        }
        async function senddata(v) {
          const excel_first_data = v[0]
          const excel_data = excel_first_data.data
          const table_head = excel_data[0]
          // 删除文件第一行，即表头
          excel_data.splice(0, 1)
          res.send({
            code: 200,
            table_head: table_head,
            excel_data: excel_data,
            file_name: xlsxfile
          })
        }
        let r = await analysisdata()
        r = await senddata(r)
      }
    })
  } else {
    res.send({ code: 401, msg: '您没有权限进行此操作' })
  }
})

router.post('/uploadVehicleJson', function(req, res, next) {
  var table_data = JSON.parse(req.body.jsonT)
  var len = Object.keys(table_data).length
  var sql_total = ''
  // console.log(table_data)
  var timesNow = new Date()
  createtime =
    timesNow.getFullYear() +
    '-' +
    (timesNow.getMonth() + 1) +
    '-' +
    timesNow.getDate() +
    ' ' +
    timesNow.getHours() +
    ':' +
    timesNow.getMinutes() +
    ':' +
    timesNow.getSeconds()
  var createuser = req.user.username
  for (i = 0; i < len; i++) {
    var sql =
      "INSERT INTO vehicleinsurance set ordernumber='" +
      table_data[i].ordernumber +
      "',insured='" +
      table_data[i].insured +
      "',licenseplate='" +
      table_data[i].licenseplate +
      "',ordersignature='" +
      table_data[i].ordersignature +
      "',charge='" +
      table_data[i].charge +
      "',date='" +
      table_data[i].date +
      "',dispatchclerk='" +
      table_data[i].dispatchclerk +
      "',orderprintnumber='" +
      table_data[i].orderprintnumber +
      "',attributiondepartment='" +
      table_data[i].attributiondepartment +
      "',createtime='" +
      createtime +
      "',createuser='" +
      createuser +
      "';"
    sql_total += sql
  }
  console.log(sql_total)
  try {
    db.query(sql_total, [], function(err, results) {
      if (err) {
        res.send({ code: 500, msg: '导入数据库失败' })
      } else {
        res.send({ code: 200, msg: '导入数据库成功' })
      }
    })
  } catch (e) {
    res.send({ code: 500, msg: '导入数据库失败' })
  }
})

router.post('/uploadNoVehicle', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var form = new formidable.IncomingForm()
    form.encoding = 'utf-8' // 设置编码
    form.uploadDir = './upload/' // 设置上传目录
    form.keepExtensions = true // 保留后缀
    form.maxFieldsSize = 5 * 1024 * 1024 // 文件大小上限设置为5M
    form.parse(req, async function(err, fields, files) {
      if (err) {
        res.send({
          code: 400,
          msg: '上传文件错误'
        })
      } else {
        const xlsxfile = files.excel.path
        async function analysisdata() {
          return new Promise((resolve, reject) => {
            //解析xlsx
            let obj = node_xlsx.parse(xlsxfile)
            resolve(obj)
          })
        }
        async function senddata(v) {
          const excel_first_data = v[0]
          const excel_data = excel_first_data.data
          const table_head = excel_data[0]
          // 删除文件第一行，即表头
          excel_data.splice(0, 1)
          res.send({
            code: 200,
            table_head: table_head,
            excel_data: excel_data,
            file_name: xlsxfile
          })
        }
        let r = await analysisdata()
        r = await senddata(r)
      }
    })
  } else {
    res.send({ code: 401, msg: '您没有权限进行此操作' })
  }
})

router.post('/uploadNoVehicleJson', function(req, res, next) {
  var table_data = JSON.parse(req.body.jsonT)
  var len = Object.keys(table_data).length
  var sql_total = ''
  // console.log(table_data)
  var timesNow = new Date()
  createtime =
    timesNow.getFullYear() +
    '-' +
    (timesNow.getMonth() + 1) +
    '-' +
    timesNow.getDate() +
    ' ' +
    timesNow.getHours() +
    ':' +
    timesNow.getMinutes() +
    ':' +
    timesNow.getSeconds()
  var createuser = req.user.username
  for (i = 0; i < len; i++) {
    var sql =
      "INSERT INTO novehicleinsurance set ordernumber='" +
      table_data[i].ordernumber +
      "',applicant='" +
      table_data[i].applicant +
      "',ordersignature='" +
      table_data[i].ordersignature +
      "',charge='" +
      table_data[i].charge +
      "',date='" +
      table_data[i].date +
      "',dispatchclerk='" +
      table_data[i].dispatchclerk +
      "',orderprintnumber='" +
      table_data[i].orderprintnumber +
      "',attributiondepartment='" +
      table_data[i].attributiondepartment +
      "',createtime='" +
      createtime +
      "',createuser='" +
      createuser +
      "';"
    sql_total += sql
  }
  console.log(sql_total)
  try {
    db.query(sql_total, [], function(err, results) {
      if (err) {
        res.send({ code: 500, msg: '导入数据库失败' })
      } else {
        res.send({ code: 200, msg: '导入数据库成功' })
      }
    })
  } catch (e) {
    res.send({ code: 500, msg: '导入数据库失败' })
  }
})

module.exports = router
