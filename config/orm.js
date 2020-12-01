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
    updateOne: function(bool, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [bool], function(err, res) {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;

// Reminder note for myself when looking back.
//Considering we only have one table, with only one value that is entered by the user(burger_name), much of the boiler plate that we can gather from the class data is unnecessary. The boolean value, devoured, is automatically set to false as we are going to input it into the system as a burger that "will be devoured." Therefore, it has not been eaten, and is set to false. It will only need to be updated once it has been devoured. The delete function has been left out as well, because one cannot "undevour" an item. 