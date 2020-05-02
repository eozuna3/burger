$(function () {
  
  //  Submit button function to add a new row to the burgers table
  $("#createBurgerBtn").on("click", function (event) {
    event.preventDefault();
    console.log("submit button pressed");
    var newBurger = {
      burgerName: $("#burgerName").val().trim(),
      devoured: false
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("new burger created");
      location.reload();
    });
  });

  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
