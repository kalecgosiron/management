var departmentSql = {
  getVehicleOrderBydepartment:
    "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from vehicleinsurance where state is NULL and attributiondepartment = ?",
  getNoVehicleOrderrBydepartment:
    "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from novehicleinsurance where state is NULL and attributiondepartment = ?",
  getMemberList:
    "SELECT employeeid,department,name,date_format(createtime,'%Y-%m-%d') as createtime,date_format(changetime,'%Y-%m-%d') as changetime from employee where department = ?"
}

module.exports = departmentSql
