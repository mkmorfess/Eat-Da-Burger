var express = require("express");
var exphbs = require("express-handlebars");
// var met = require("method-override");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var PORT = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(function(err){

	if (err) throw err;
	console.log("Connected");

});

app.get("/", function(req, res) {

	connection.query("SELECT * FROM burgers;", function(err, data){
		if (err) { 
			return res.status(500).end();
		}
			res.render("burger", { data: data });
	})

})

app.post("/burger", function(req, res) {
	console.log(req.body.burgers);

	connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burgers], function(err, data){
		if (err) { 
			return res.status(500).end();
			
		}
			res.json({ id: data.insertId });
    		console.log({ id: data.insertId });
    		// console.log("This is working")
	})

})


app.delete("/burger/:id", function(req, res) {
  connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
    
      return res.status(500).end();
    } else if (result.affectedRows == 0) {
  
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


app.listen(PORT, function(err){
	if (err) throw err;
	console.log("Listening on port number " + PORT)
});