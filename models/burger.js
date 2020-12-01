const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res);
        });
    },
    updateOne: function(bool, cb) {
        orm.updateOne(bool, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;