const express = require("express");
const router = express.Router();
const burger = require("../models/burger");





router.get("/", (req,res) => {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index",hbsObject);
    });
    
});

module.exports = router;