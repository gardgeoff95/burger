var orm = require("../config/orm");


var burger = {
    all : function(cb) {
        orm.selectAll(function(res){
            cb(res);
        
        });
    },
    insert : function(burgerName, devoured, cb) {
        orm.insertOne(burgerName, devoured, function(res){
            cb(res)
        })

    }
}

module.exports = burger;