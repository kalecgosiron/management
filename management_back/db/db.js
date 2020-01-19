var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'work',
  multipleStatements: true // 允许执行多条语句
})

function query(sql, values, callback) {
  console.log('db pool')
  pool.getConnection(function(err, connection) {
    if (err) throw err
    //Use the connection
    connection.query(sql, values, function(err, results, fields) {
      //每次查询都会 回调
      callback(err, results)
      //只是释放链接，在缓冲池了，没有被销毁
      connection.release()
      if (err) throw error
    })
  })
}

exports.query = query
