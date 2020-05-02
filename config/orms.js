// Import MySQL connection.
var connection = require("../config/connection.js");

function createQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
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
  
  
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;