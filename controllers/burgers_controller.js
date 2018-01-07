var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	res.render("home");
})

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);

    
    res.render("burger", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.create([req.body.burgers], function(result) {
   
    res.json({ id: result.insertId });
  });
});

router.delete("/burgers/:id", function(req, res) {
  var condition = req.params.id;

  burger.delete([condition], function(result) {
    if (result.affectedRows === 0) {
      
      return res.status(404).end();
    } else {
      
      res.status(200).end();
    }
  });
});


router.put("/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.update([id], function(result) {
    if (result.affectedRows === 0) {
      
      return res.status(404).end();
    } else {
      
      res.status(200).end();
    }
  });
});


module.exports = router;
