var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "A19s92c95ar",
    database: "burgers_db",

})

connection.connect(function(err){
    if(err) throw err;


    console.log("Connected to DB");

})