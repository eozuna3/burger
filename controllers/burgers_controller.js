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

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.insertOne([
    "burger_name", "devoured"
  ], [ req.body.burgerName, false
  ], function(result) {
    console.log(result);
    res.end();
  });
});

router.put("/api/cats/:id", function(req, res) {
  var idOfDevouredBurger = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;