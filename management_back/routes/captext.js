var express = require('express');
var router = express.Router();

var db = require('../db/db'); //引入db
var captextSql = require('../db/sql/captextSql');
var captcha = require('svg-captcha');
var random = require('string-random');

router.get("/getCaptcha", function (req, res, next) {
    var uuid = req.query.uuid
    res.type('svg')
    db.query(captextSql.getCaptextByUuid, [uuid], function (err, rows) {
        console.log(rows)
        if(rows !== null){
            const cap = captcha(rows[0].captext)
            res.send(cap);
        }else{
            res.send({code:401, msg:"获取失败"})
        }
    });
});

router.get("/createCapthca", function (req, res, next) {
    var cap = captcha.create();
    var captext = cap.text;
    var uuid = random(32);
    var createtime = new Date();
    createtime.setHours(createtime.getHours());
    db.query(captextSql.insert, [captext,createtime,uuid], function (err, result) {
        // console.log(result)
        if(result.affectedRows==1){
            res.send({uuid: uuid});
        }
    });
});


module.exports = router;
