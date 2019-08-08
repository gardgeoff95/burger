$(document).ready(function(){
    console.log("we Here")



    $("#submit").on("click", function(){
        var newBurger = {
            burger_name : $("#input").val().trim(),
            devoured : 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Created new burger");
            location.reload();

            
        })
    })
})