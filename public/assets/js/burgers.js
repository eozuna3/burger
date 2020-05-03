$(function () {

  //  Submit button function to add a new row to the burgers table
  $("#createBurgerBtn").on("click", function (event) {
    event.preventDefault();
    console.log("submit button pressed");
    if ($("#burgerName").val() !== "") {
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
    };
  });

  //  Devour button function to update the devoured value of the record referred to by the button
  $(".devouredBtn").on("click", function (event) {
    var burgerId = $(this).data("id");

    var burgerObject = {
      burgerState: $(this).data("state")
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + burgerId, {
      type: "PUT",
      data: burgerObject
    }).then(
      function () {
        console.log("changed sleep to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
