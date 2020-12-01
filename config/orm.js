const mysql = require("mysql");
const connection = require('./connection.js');

const orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connectionq.query(queryString, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger_name], function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    updateOne: function(bool, cd) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [bool], function(err, res) {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;