// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
  },
  
  insertOne: function(table, cols, vals, cb) {  
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;