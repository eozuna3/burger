//  Dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//  Route for getting all the objects
router.get("/", function(req, res) {
  burger.selectAll(function(data){
    var allBurgersObject = {
      burgers: data
    }
    console.log(allBurgersObject);
    res.render("index", allBurgersObject);
  });
});

// Route for creating a new row in the database based on the user input
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

// Route for updating the devoured state of the selected burger
router.put("/api/cats/:id", function(req, res) {
  var burgerState = true;
  var idOfDevouredBurger = "id = " + req.params.id;

  burger.updateOne(burgerState, idOfDevouredBurger, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;