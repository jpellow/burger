var orm = require("../config/orm.js");
//Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerName, cb) {
      orm.insertOne(burgerName, function(res) {
        cb(res);
      });
    },
    update: function(burgerName, cb) {
      orm.update(burgerName, function(res) {
        cb(res);
      });
    }
  };


module.exports = burger;
