var orm = require("../config/orm");


var burger = {
    all : function() {
        orm.selectAll()
    },
    insert : function(burgerName, devoured) {
        orm.insertOne(burgerName, devoured)

    }
}

module.exports = burger;