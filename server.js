var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;


var app = express();

//reads css and js file from public folder
app.use(express.static("public"));
//boilerplate express and handlebars
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.listen(PORT, function(){
    console.log("Server Listening on Port: " + PORT);

});

