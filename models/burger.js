var orm = require("../config/orm");


var burger = {
    all : function(cb) {
        orm.selectAll(function(res){
            cb(res);
        
        });
    },
    insert : function(burgerName, devoured) {
        orm.insertOne(burgerName, devoured)

    }
}

module.exports = burger;