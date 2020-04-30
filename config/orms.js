// Import MySQL connection.
var connection = require("../config/connection.js");

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
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;