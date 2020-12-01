$(function() {
    $(".devourBtn").on("click", function(event) {
      var id = $(this).data("id");
      var valDevoured = $(this).data("devour");
  
      var newValDevoured = {
        devoured: valDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newValDevoured
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#name-input").val().trim(),
        devoured: 1
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  