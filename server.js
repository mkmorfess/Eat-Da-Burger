var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);






// app.post("/burgers", function(req, res) {
// 	console.log(req.body.burgers);

// 	connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burgers], function(err, data){
// 		if (err) { 
// 			return res.status(500).end();
			
// 		}
// 			res.json({ id: data.insertId });
//     		console.log({ id: data.insertId });
//     		// console.log("This is working")
// 	})

// })


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


app.listen(PORT, function(err){
	if (err) throw err;
	console.log("Listening on port number " + PORT)
});