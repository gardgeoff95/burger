var db = require("../models");
module.exports = function(app){
    app.post("/api/burgers", function(req, res){
        var name = req.body.burger_name
        

        db.burger.create({
            burgerName: name,
            devoured: 0
        }).then(function(data){
            console.log(data);
        })

    });
    app.get("/api/burgers", function (req, res) {
        db.burger.findAll({}).then(function(data){
            res.json(data);
        })

    });
};
