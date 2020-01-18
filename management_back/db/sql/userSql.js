var userSql = {
  insert: 'INSERT INTO user(userName, password) VALUES(?,?) ',
  query: 'SELECT * FROM user ',
  getUserById: 'SELECT * FROM user WHERE id = ? ',
  checkUserByUsername: 'SELECT * from user where username = ?',
  checkCaptextByUuid: 'select captext FROM captext WHERE uuid = ? ',
  deleteCaptextByUuid: 'DELETE FROM captext WHERE uuid = ? '
}

module.exports = userSql
