var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var homeSql = require('../db/sql/homeSql') // 引入sql语句

router.get('/getHomeCount', function(req, res, next) {
  // token验证用户权限
  if (
    req.user.authority == 'superadmin' ||
    req.user.authority == 'departmentmanagement' ||
    req.user.authority == 'documentpost'
  ) {
    db.query(homeSql.selectCount, [], function(err, results) {
      sum_count = results[0][0].count1 + results[1][0].count2
      sum_lackcount = results[2][0].lackcount1 + results[3][0].lackcount2
      sum_nolackcount = results[4][0].nolackcount1 + results[5][0].nolackcount2
      res.send({
        sum_count: sum_count,
        sum_lackcount: sum_lackcount,
        sum_nolackcount: sum_nolackcount
      })
    })
  } else {
    req.send({ code: 401, msg: '您没有权限' })
  }
})

router.get('/getChartData', function(req, res, next) {
  var sendLackList = []
  var sendNoLackList = []
  db.query(homeSql.getChartData, [], (err, results) => {
    for (var i = 0; i < 23; i = i + 2) {
      sendLackList.push(results[i][0].lackcount + results[i + 1][0].lackcount)
    }
    for (var j = 24; j < 48; j = j + 2) {
      sendNoLackList.push(results[j][0].lackcount + results[j + 1][0].lackcount)
    }
    res.send({ lackdata: sendLackList, nolackdata: sendNoLackList })
  })
})

router.get('/getUserInfo', function(req, res, next) {
  var username = req.user.username
  res.send({ code: 200, username: username })
})

module.exports = router
