var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db

router.post('/checkOrder', function(req, res, next) {
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'documentpost'
  ) {
    var ordertype = req.body.ordertype
    var ordernumber = req.body.ordernumber
    var date = req.body.date.split('- ')
    var dateStart = date[0]
    var dateEnd = date[1]
    var orderprintnumber = req.body.orderprintnumber
    var attributiondepartment = req.body.attributiondepartment
    var charge = req.body.charge
    var dispatchclerk = req.body.dispatchclerk
    var ordersignature = req.body.ordersignature
    var insured = req.body.insured
    var licenseplate = req.body.licenseplate
    var applicant = req.body.applicant
    if (dateStart != dateEnd) {
      if (ordertype == '车险') {
        var sql =
          "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state,date_format(createtime,'%Y-%m-%d %h:%m') as createtime,createuser from vehicleinsurance where"
        var data = []
        if (ordernumber != '') {
          sql += ' ordernumber=?'
          data.push(ordernumber)
        }
        if (date != '' && ordernumber != '') {
          sql += ' and date between ? and ?'
          data.push(dateStart)
          data.push(dateEnd)
        } else if (date != '' && ordernumber == '') {
          sql += ' date between ? and ?'
          data.push(dateStart)
          data.push(dateEnd)
        }
        if (orderprintnumber != '' && ordernumber == '' && date == '') {
          sql += ' orderprintnumber=?'
          data.push(orderprintnumber)
        } else if (orderprintnumber != '') {
          sql += ' and orderprintnumber=?'
          data.push(orderprintnumber)
        }

        if (
          attributiondepartment != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == ''
        ) {
          sql += ' attributiondepartment=?'
          data.push(attributiondepartment)
        } else if (attributiondepartment != '') {
          sql += ' and attributiondepartment=?'
          data.push(attributiondepartment)
        }

        if (
          charge != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == ''
        ) {
          sql += ' charge=?'
          data.push(charge)
        } else if (charge != '') {
          sql += ' and charge=?'
          data.push(charge)
        }

        if (
          dispatchclerk != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == ''
        ) {
          sql += ' dispatchclerk=?'
          data.push(dispatchclerk)
        } else if (dispatchclerk != '') {
          sql += ' and dispatchclerk=?'
          data.push(dispatchclerk)
        }

        if (
          ordersignature != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == ''
        ) {
          sql += ' ordersignature=?'
          data.push(ordersignature)
        } else if (ordersignature != '') {
          sql += ' and ordersignature=?'
          data.push(ordersignature)
        }

        if (
          insured != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == '' &&
          ordersignature == ''
        ) {
          sql += ' insured=?'
          data.push(insured)
        } else if (insured != '') {
          sql += ' and insured=?'
          data.push(insured)
        }
        db.query(sql, data, (err, results) => {
          if (results == '') {
            results = [
              {
                ordernumber: '没有相关信息',
                insured: '没有相关信息',
                licenseplate: '没有相关信息',
                ordersignature: '没有相关信息',
                charge: '没有相关信息',
                date: '没有相关信息',
                dispatchclerk: '没有相关信息',
                orderprintnumber: '没有相关信息',
                attributiondepartment: '没有相关信息'
              }
            ]
            res.send({ code: 404, results: results, type: '车险' })
          } else {
            res.send({ code: 200, results: results, type: '车险' })
          }
        })
      } else if (ordertype == '非车险') {
        var sql =
          "select ordernumber,applicant,ordersignature,id_card,aml,special_business_materials,other_data,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state,date_format(createtime,'%Y-%m-%d %h:%m') as createtime,createuser from novehicleinsurance where"
        var data = []
        if (ordernumber != '') {
          sql += ' ordernumber=?'
          data.push(ordernumber)
        }
        if (date != '' && ordernumber != '') {
          sql += ' and date between ? and ?'
          data.push(dateStart)
          data.push(dateEnd)
        } else if (date != '' && ordernumber == '') {
          sql += ' date between ? and ?'
          data.push(dateStart)
          data.push(dateEnd)
        }
        if (orderprintnumber != '' && ordernumber == '' && date == '') {
          sql += ' orderprintnumber=?'
          data.push(orderprintnumber)
        } else if (orderprintnumber != '') {
          sql += ' and orderprintnumber=?'
          data.push(orderprintnumber)
        }

        if (
          attributiondepartment != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == ''
        ) {
          sql += ' attributiondepartment=?'
          data.push(attributiondepartment)
        } else if (attributiondepartment != '') {
          sql += ' and attributiondepartment=?'
          data.push(attributiondepartment)
        }

        if (
          charge != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == ''
        ) {
          sql += ' charge=?'
          data.push(charge)
        } else if (charge != '') {
          sql += ' and charge=?'
          data.push(charge)
        }

        if (
          dispatchclerk != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == ''
        ) {
          sql += ' dispatchclerk=?'
          data.push(dispatchclerk)
        } else if (dispatchclerk != '') {
          sql += ' and dispatchclerk=?'
          data.push(dispatchclerk)
        }

        if (
          ordersignature != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == ''
        ) {
          sql += ' ordersignature=?'
          data.push(ordersignature)
        } else if (ordersignature != '') {
          sql += ' and ordersignature=?'
          data.push(ordersignature)
        }

        if (
          applicant != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == '' &&
          ordersignature == ''
        ) {
          sql += ' applicant=?'
          data.push(applicant)
        } else if (applicant != '') {
          sql += ' and applicant=?'
          data.push(applicant)
        }
        db.query(sql, data, (err, results) => {
          if (results == '') {
            results = [
              {
                ordernumber: '没有相关信息',
                applicant: '没有相关信息',
                ordersignature: '没有相关信息',
                charge: '没有相关信息',
                date: '没有相关信息',
                dispatchclerk: '没有相关信息',
                orderprintnumber: '没有相关信息',
                attributiondepartment: '没有相关信息'
              }
            ]
            res.send({ code: 404, results: results, type: '非车险' })
          } else {
            res.send({ code: 200, results: results, type: '非车险' })
          }
        })
      }
    } else if (dateStart == dateEnd) {
      if (ordertype == '车险') {
        var sql =
          "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state,date_format(createtime,'%Y-%m-%d %h:%m') as createtime,createuser from vehicleinsurance where"
        var data = []
        if (ordernumber != '') {
          sql += ' ordernumber=?'
          data.push(ordernumber)
        }
        if (date != '' && ordernumber != '') {
          sql += ' and date=?'
          data.push(dateStart)
        } else if (date != '' && ordernumber == '') {
          sql += ' date=?'
          data.push(dateStart)
        }
        if (orderprintnumber != '' && ordernumber == '' && date == '') {
          sql += ' orderprintnumber=?'
          data.push(orderprintnumber)
        } else if (orderprintnumber != '') {
          sql += ' and orderprintnumber=?'
          data.push(orderprintnumber)
        }

        if (
          attributiondepartment != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == ''
        ) {
          sql += ' attributiondepartment=?'
          data.push(attributiondepartment)
        } else if (attributiondepartment != '') {
          sql += ' and attributiondepartment=?'
          data.push(attributiondepartment)
        }

        if (
          charge != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == ''
        ) {
          sql += ' charge=?'
          data.push(charge)
        } else if (charge != '') {
          sql += ' and charge=?'
          data.push(charge)
        }

        if (
          dispatchclerk != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == ''
        ) {
          sql += ' dispatchclerk=?'
          data.push(dispatchclerk)
        } else if (dispatchclerk != '') {
          sql += ' and dispatchclerk=?'
          data.push(dispatchclerk)
        }

        if (
          ordersignature != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == ''
        ) {
          sql += ' ordersignature=?'
          data.push(ordersignature)
        } else if (ordersignature != '') {
          sql += ' and ordersignature=?'
          data.push(ordersignature)
        }

        if (
          insured != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == '' &&
          ordersignature == ''
        ) {
          sql += ' insured=?'
          data.push(insured)
        } else if (insured != '') {
          sql += ' and insured=?'
          data.push(insured)
        }
        db.query(sql, data, (err, results) => {
          if (results == '') {
            results = [
              {
                ordernumber: '没有相关信息',
                insured: '没有相关信息',
                licenseplate: '没有相关信息',
                ordersignature: '没有相关信息',
                charge: '没有相关信息',
                date: '没有相关信息',
                dispatchclerk: '没有相关信息',
                orderprintnumber: '没有相关信息',
                attributiondepartment: '没有相关信息'
              }
            ]
            res.send({ code: 404, results: results, type: '车险' })
          } else {
            res.send({ code: 200, results: results, type: '车险' })
          }
        })
      } else if (ordertype == '非车险') {
        var sql =
          "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state,date_format(createtime,'%Y-%m-%d %h:%m') as createtime,createuser from novehicleinsurance where"
        var data = []
        if (ordernumber != '') {
          sql += ' ordernumber=?'
          data.push(ordernumber)
        }
        if (date != '' && ordernumber != '') {
          sql += ' and date=?'
          data.push(dateStart)
        } else if (date != '' && ordernumber == '') {
          sql += ' date=?'
          data.push(dateStart)
        }
        if (orderprintnumber != '' && ordernumber == '' && date == '') {
          sql += ' orderprintnumber=?'
          data.push(orderprintnumber)
        } else if (orderprintnumber != '') {
          sql += ' and orderprintnumber=?'
          data.push(orderprintnumber)
        }

        if (
          attributiondepartment != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == ''
        ) {
          sql += ' attributiondepartment=?'
          data.push(attributiondepartment)
        } else if (attributiondepartment != '') {
          sql += ' and attributiondepartment=?'
          data.push(attributiondepartment)
        }

        if (
          charge != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == ''
        ) {
          sql += ' charge=?'
          data.push(charge)
        } else if (charge != '') {
          sql += ' and charge=?'
          data.push(charge)
        }

        if (
          dispatchclerk != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == ''
        ) {
          sql += ' dispatchclerk=?'
          data.push(dispatchclerk)
        } else if (dispatchclerk != '') {
          sql += ' and dispatchclerk=?'
          data.push(dispatchclerk)
        }

        if (
          ordersignature != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == ''
        ) {
          sql += ' ordersignature=?'
          data.push(ordersignature)
        } else if (ordersignature != '') {
          sql += ' and ordersignature=?'
          data.push(ordersignature)
        }

        if (
          applicant != '' &&
          ordernumber == '' &&
          date == '' &&
          orderprintnumber == '' &&
          attributiondepartment == '' &&
          charge == '' &&
          dispatchclerk == '' &&
          ordersignature == ''
        ) {
          sql += ' applicant=?'
          data.push(applicant)
        } else if (applicant != '') {
          sql += ' and applicant=?'
          data.push(applicant)
        }
        db.query(sql, data, (err, results) => {
          if (results == '') {
            results = [
              {
                ordernumber: '没有相关信息',
                applicant: '没有相关信息',
                ordersignature: '没有相关信息',
                charge: '没有相关信息',
                date: '没有相关信息',
                dispatchclerk: '没有相关信息',
                orderprintnumber: '没有相关信息',
                attributiondepartment: '没有相关信息'
              }
            ]
            res.send({ code: 404, results: results, type: '非车险' })
          } else {
            res.send({ code: 200, results: results, type: '非车险' })
          }
        })
      }
    }
  } else {
    res.send({ code: 404, msg: '您没有权限进行此操作' })
  }
})

module.exports = router
