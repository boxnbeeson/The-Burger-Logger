const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req,res) {
    const burgerName = req.body.burger_name;
    const devoured = req.body.devoured;
    burger.insertOne(burgerName, devoured, function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function(req,res) {
    const devoured = req.body.devoured;
    const condition = req.params.id;
    burger.updateOne(devoured, condition, function(data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;