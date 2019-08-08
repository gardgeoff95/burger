const connection = require("../config/connection");



var orm = {
    selectAll : function(cb){
        connection.query("SELECT * FROM burgers", function (err, data){
          if (err) {
              throw err;

          }  
          cb(data);
        })
    },
    insertOne : function(name, devoured){
        connection.query(`INSERT INTO burgers (burger name, devoured) VALUES (?,?)`,[name, devoured], function(err, data){
            
        })
    }
}


module.exports = orm;