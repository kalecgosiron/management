var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db

router.post('/uploadVehicle', function(req, res, next) {
  var form = new formidable.IncomingForm()
  form.encoding = 'utf-8' //设置编码
  form.uploadDir = '../upload/' //设置上传目录
  form.keepExtensions = true //保留后缀
  form.maxFieldsSize = 5 * 1024 * 1024 //文件大小上限设置为5M
  form.parse(req, async function(err, fields, files) {
    if (err) {
      res.statusCode = 400
      res.send({
        error: '上传文件错误'
      })
      return
    }
    // console.log(files.excel.path)
    const xlsxfile = files.excel.path
    async function analysisdata() {
      return new Promise((resolve, reject) => {
        //解析xlsx
        let obj = node_xlsx.parse(xlsxfile)
        resolve(obj)
      })
    }
    async function readdata(v) {
      const excel_first_data = v[0]
      const excel_data = excel_first_data.data
      const table_head = excel_data[0]
      // 删除文件第一行，即表头
      excel_data.splice(0, 1)
      // console.log(excel_data[0])
      res.send({
        results: excel_data,
        table_head: table_head,
        file_name: xlsxfile
      })
    }
    let r = await analysisdata()
    r = await readdata(r)
  })
})

module.exports = router
