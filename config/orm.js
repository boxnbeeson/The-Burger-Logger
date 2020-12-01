const connection = require('./connection.js');

const orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO burgers ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, col, val, col2, val2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, val, col2, val2], function(err, res) {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;