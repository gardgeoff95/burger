const connection = require("../config/connection");



var orm = {
    selectAll : function(){
        connection.query("SELECT * FROM burgers", function (err, data){
            console.log(data);
        })
    },
    insertOne : function(name, devoured){
        connection.query(`INSERT INTO burgers (burger name, devoured) VALUES (?,?)`,[name, devoured], function(err, data){
            
        })
    }
}


module.exports = orm;