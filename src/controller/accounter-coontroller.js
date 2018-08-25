const mysql = require("../config/mysql");

exports.findAccountById = (id) => {
    const sql = `SELECT * FROM accounts WHERE uid = ${id}`;
    mysql.query(sql, (err, rows) => {
        if(err) return { status: 500 };
        if(!rows[0]) return {status: 404};
        return {
            status: 200,
            account: rows[0]
        };
    })
};