$(document).ready(function(){

    $(".deleteBurg").on("click", function(event) {
        var id = $(this).data("burgerid");
        console.log(id);
        
        $.ajax("/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted id ", id);
            
            location.reload();
          }
        );
      });


    $("#newBurger").on("submit", function(event) {
        
        event.preventDefault();

        var newBurger = {
          burgers: $("#newBurger [name=burger]").val().trim()
        };

        if (newBurger.burgers.length === 0) {
          $("#error").html("Please input a burger before attempting to add");
        }

        else {
          $("#error").html("");
          // console.log(burgers);

          
          $.ajax("/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              
              location.reload();
            }
          );
        }
      });

})