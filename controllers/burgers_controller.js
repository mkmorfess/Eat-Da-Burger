var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	res.render("home");
})

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    
    console.log(data);
    res.render("burger", data);
  });
});

router.post("/burgers", function(req, res) {
  burger.create([req.body.burgers], function(result) {
   
    res.json({ id: result.insertId });
  });
});

// router.delete("/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.delete({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


module.exports = router;
