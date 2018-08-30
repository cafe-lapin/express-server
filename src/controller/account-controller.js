const mysql = require("../config/mysql");

exports.findAccountById = (id) => {
    const sql = `SELECT * FROM accounts WHERE uid = '${id}'`;
    return new Promise(resolve => {
        mysql.query(sql, (err, rows) => {
            if(err) resolve({ status: 500 });
            if(!rows[0]) resolve({status: 404});
            resolve({
                status: 200,
                account: rows[0]
            }); 
        })
    }) 
};