var employeeSql = {
  getAllEmployee: 'select * from employee',
  deleteEmployeeByEmployeeid: 'DELETE FROM employee where employeeid = ?',
  checkEmployeeid: 'select count(*) as count from employee where employeeid=?',
  createEmployee:
    'INSERT INTO employee set employeeid=?,name=?,department=?,createtime=?'
}

module.exports = employeeSql
