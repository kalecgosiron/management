var express = require('express')
var router = express.Router()

var db = require('../db/db') //引入db
var captextSql = require('../db/sql/homeSql')

router.get('/getHomeCount', function(req, res, next) {
  // 加上token验证
  db.query(homeSql.selectCount, [], function(err, results) {
    console.log(results)
  })
})

module.exports = router
