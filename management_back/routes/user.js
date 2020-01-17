var express = require('express');
var router = express.Router();

var db = require('../db/db'); //引入db
var userSql = require('../db/sql/userSql');

router.get("/getAllUsers", function (req, res, next) {
  db.query(userSql.query, [], function (err, rows) {
      res.send({code:0, msg:"查询成功", count:rows.size, data: rows});
  });
});

router.post("/insert", function (req, res, next) {
  var results = {};
  db.query(userSql.insert, [req.body.username, req.body.password], function (err, rows) {
      results = rows;
      res.send(results);
  });
});

router.post("/checkUser", function (req, res, next) {
  console.log(req.body)
  console.log(req.body.username)
  var password = req.body.password.toUpperCase()
  db.query(userSql.checkUserByUsername, [req.body.username], function (err, results) {
    console.log(results)
    if(password == results[0].password){
      console.log("登录成功")
      res.send({code:200, msg:"登录成功"})
    }else{
      console.log("登录失败")
      res.send({code:404, msg:"登录失败"})
    }
  });
});

module.exports = router;
