var homeSql = {
  selectCount:
    "select count(*) as count1 from vehicleinsurance ; select count(*) as count2 from novehicleinsurance ; select count(*) as lackcount1 from vehicleinsurance where ordersignature='欠缺' ; select count(*) as lackcount2 from novehicleinsurance where ordersignature='欠缺'; select count(*) as nolackcount1 from vehicleinsurance where ordersignature='不欠缺' ; select count(*) as nolackcount2 from novehicleinsurance where ordersignature='不欠缺'"
}

module.exports = homeSql
