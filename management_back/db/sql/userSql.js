var userSql = {
    insert : 'INSERT INTO user(userName, password) VALUES(?,?) ',
    query : 'SELECT * FROM user ',
    getUserById: 'SELECT * FROM user WHERE id = ? ',
    checkUserByUsername: 'SELECT password from user where username = ?'
};

module.exports = userSql;