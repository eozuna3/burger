var connection = require("../config/connection.js");

//  Function that creates question marks for the insert query to work
function createQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  //  SQL query to return all the information in the burger table
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM " + tableName + ";";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  //  SQL query create a new row in the burger table for the information entered by the user from the form
  insertOne: function(table, cols, vals, cb) {  
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += createQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  
  // SQL query to update a record in the table
  updateOne: function(table, burgerState, idOfDevouredBurger, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += "devoured = " + burgerState;
    queryString += " WHERE ";
    queryString += idOfDevouredBurger;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;