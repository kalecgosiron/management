var captextSql = {
    getCaptextByUuid : "select captext from `captext` where uuid = ?",
    insert : "insert into `captext` (captext,createtime,uuid) value (?,?,?)"
}

module.exports = captextSql;