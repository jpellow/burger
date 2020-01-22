var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM bugers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  },
  insertOne: function(burgerName) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
    console.log(queryString);
    connection.query(queryString, [burgerName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE burgers";

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },

  updateOne: function(burgerName, devBool) {
    var queryString =
      "UPDATE burgers SET burger_name = ?, devoured = ?";

    connection.query(
      queryString,
      [tburgerName, devBool],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
