module.exports = function(sequelize, Datatypes) {
    var Burger = sequelize.define("burger", {
        burgerName: {
            type: Datatypes.STRING,
            allowNull: false,

        },
        devoured: {
            type: Datatypes.BOOLEAN
            
            
        }
    });
    return Burger;
}