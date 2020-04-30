var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data){
    var allBurgersObject = {
      burgers: data
    }
    console.log(allBurgersObject);
    res.render("index", allBurgersObject);
  });
});

// Export routes for server.js to use.
module.exports = router;