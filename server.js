var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller.js");

var PORT = 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);


// app.delete("/burgers/:id", function(req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
    
//       return res.status(500).end();
//     } else if (result.affectedRows == 0) {
  
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


app.listen(process.env.PORT || PORT, function(err){
	if (err) throw err;
	console.log("Listening on port number " + PORT)
});