const mysql = require("mysql");

const connection = mysql.creationConnection({
    host:"127.0.0.1",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;