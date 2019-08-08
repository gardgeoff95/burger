const express = require("express");
const router = express.Router();
const burger = require("../models/burger");





router.get("/", (req,res) => {
    burger.all(function(data) {
        var hbsObject = {
            burger: data,
            
        };
        res.render("index",hbsObject);
    });
    
});

router.post("/api/burgers", (req,res) =>{
    burger.insert(req.body.burger_name, req.body.devoured, function (result){
        res.json({id: result.burger_name})
    })
})


module.exports = router;