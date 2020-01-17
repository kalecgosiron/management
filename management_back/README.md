# db/sql/userSql.js
    var userSql = {
        insert : 'INSERT INTO user(userName, password) VALUES(?,?) ',
        query : 'SELECT * FROM user ',
        getUserById: 'SELECT * FROM user WHERE id = ? '
    };
    module.exports = userSql;

# routes/user.js
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

    module.exports = router;

# app.js
    var user = require('./routes/user');
    app.use('/user', user);