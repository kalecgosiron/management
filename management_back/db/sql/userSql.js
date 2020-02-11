var userSql = {
  checkUserByUsername: 'SELECT * from user where username = ?',
  checkCaptextByUuid: 'SELECT captext FROM captext WHERE uuid = ? ',
  deleteCaptextByUuid: 'DELETE FROM captext WHERE uuid = ? ',
  getUserList:
    "SELECT userid,username,userauthority,date_format(jointime,'%Y-%m-%d') as jointime,department from user;select count(*) as count from user",
  deleteUserByUserid: 'DELETE FROM user where userid = ?',
  changeUserByUserid:
    'UPDATE user set department=?,userauthority=? where userid=?',
  createUser:
    'INSERT INTO user set username=?,password=?,userauthority=?,department=?,userid=?,jointime=?',
  checkUserid: 'select count(*) as count from user where userid=?',
  checkPasswordByUserid: 'select password from user where userid = ?',
  changePassword: 'UPDATE user set password = ? where userid = ?',
  resetPasswordByUserid:
    "UPDATE user set password = '3EA44BD36D49E8F4A55F544F4340D04C' where userid = ?",
  checkUserName: 'select count(*) as count from user where username=?'
}

module.exports = userSql
