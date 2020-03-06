var getDataSql = {
  getNoVehicleOutTime:
    "select ordernumber,applicant,ordersignature,id_card,aml,special_business_materials,other_data,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from novehicleinsurance where date<?-interval 90 day",
  getVehicleOutTime:
    "select ordernumber,insured,licenseplate,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment,state from vehicleinsurance where date<?-interval 90 day"
}

module.exports = getDataSql
