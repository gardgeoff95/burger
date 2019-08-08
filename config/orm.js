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
    insertOne : function(name, devoured, cb){
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?,?)`,[name, devoured], function(err, data){
            if(err) {
                throw err;

            }
            cb(data);
            
        })
    }
}


module.exports = orm;