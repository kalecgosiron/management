var orderVerifySql = {
  selectList = "select ordernumber,applicant,ordersignature,charge,date_format(date,'%Y-%m-%d') as date,dispatchclerk,orderprintnumber,attributiondepartment from novehicleinsurance where state='待审核';select count(*) as count from novehicleinsurance where state='待审核'"
}

module.exports = orderVerifySql