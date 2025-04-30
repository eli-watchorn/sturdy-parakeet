const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'raign',
    password: 'testing',
    database: 'Property_DB'
})