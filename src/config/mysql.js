const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'passwd',
    database: 'express'
});

module.exports = connection;