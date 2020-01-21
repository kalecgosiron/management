var newOrderSql = {
  newVehicleOrder:
    'INSERT INTO vehicleinsurance set ordernumber=?,insured=?,licenseplate=?,ordersignature=?,charge=?,date=?,dispatchclerk=?,orderprintnumber=?,attributiondepartment=?,createtime=?,createuser=?',
  newNoVehicleOrder:
    'INSERT INTO novehicleinsurance set ordernumber=?,applicant=?,ordersignature=?,charge=?,date=?,dispatchclerk=?,orderprintnumber=?,attributiondepartment=?,createtime=?,createuser=?'
}

module.exports = newOrderSql
