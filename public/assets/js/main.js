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
    $.ajax("/api/burgers", {
        type: "GET",
        
    }).then(function(data){
        console.log(data);
        var listItem = document.createElement("li");
        for(let i = 0; i < data.length; i++){
            $("#toEat").append("<li>" + data[i].burgerName + "</li> <button class='burgers'>Eat</button>");

        }
        console.log(data[0]);



    });
    

  
});