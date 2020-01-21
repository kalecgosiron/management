var userSql = {
  checkUserByUsername: 'SELECT * from user where username = ?',
  checkCaptextByUuid: 'SELECT captext FROM captext WHERE uuid = ? ',
  deleteCaptextByUuid: 'DELETE FROM captext WHERE uuid = ? ',
  getUserList:
    "SELECT userid,username,userauthority,date_format(jointime,'%Y-%m-%d') as jointime,department from user;select count(*) as count from user"
}

module.exports = userSql
