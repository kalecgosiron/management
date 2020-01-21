var orderVerifySql = {
  selectNoVehicleList:
    "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from novehicleinsurance where state='待审核';select count(*) as count from novehicleinsurance where state='待审核'",
  passNoVehicleOrder:
    "update novehicleinsurance set state='已核实',ordersignature='不欠缺',lastchangeuser=? where ordernumber=?",
  returnNoVehicleOrder:
    "update novehicleinsurance set state='被退回',lastchangeuser=? where ordernumber=?",
  selectVehicleList:
    "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from vehicleinsurance where state='待审核';select count(*) as count from vehicleinsurance where state='待审核'",
  passVehicleOrder:
    "update vehicleinsurance set state='已核实',ordersignature='不欠缺',lastchangeuser=? where ordernumber=?",
  returnVehicleOrder:
    "update vehicleinsurance set state='被退回',lastchangeuser=? where ordernumber=?"
}

module.exports = orderVerifySql
