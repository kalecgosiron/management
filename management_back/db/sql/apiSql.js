var apiSql = {
  checkUserByUsername: 'SELECT * from user where username = ?',
  getAddressbookVehicleInsurance: 'SELECT * FROM employee',
  getAddressbookNoVehicleInsurance: 'SELECT * FROM employee',
  getInfoByName1:
    "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from vehicleinsurance where date<curdate()-interval 90 day && charge=?",
  getInfoByName2:
    "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from vehicleinsurance where date>curdate()-interval 90 day && date<curdate()-interval 60 day && charge=?",
  getInfoByName3:
    "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from vehicleinsurance where date>curdate()-interval 60 day && charge=?",
  vehicleOrderComplete:
    "update vehicleinsurance set state='待审核' where ordernumber = ?",
  getInfoByName4:
    "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date<curdate()-interval 90 day && charge=?",
  getInfoByName5:
    "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date>curdate()-interval 90 day && date<curdate()-interval 60 day && charge=?",
  getInfoByName6:
    "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date>curdate()-interval 60 day && charge=?",
  noVehicleOrderComplete:
    "update novehicleinsurance set state='待审核' where ordernumber = ?",
  getEmployeeData:
    'SELECT count(*) as count,charge from vehicleinsurance WHERE state is null GROUP BY charge',
  getEmployeeNoVehicleData:
    'SELECT count(*) as count,charge from novehicleinsurance WHERE state is null GROUP BY charge',
  updateEmployeeData:
    'UPDATE employee SET vehicleinsurancequantity = ? WHERE name = ?',
  updateEmployeeNoVehicleData:
    'UPDATE employee SET novehicleinsurancequantity = ? WHERE name = ?'
}

module.exports = apiSql
