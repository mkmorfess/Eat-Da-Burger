var express = require("express");
// var met = require("method-override");
// var body = require("body-parser");
var mysql = require("mysql");

var PORT = 3000;

var app = express();

// app.use();
// app.use();

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

connection.query("SELECT * FROM burgers;")


app.listen(PORT, function(err){
	if (err) throw err;
	console.log("Listening on port number " + PORT)
});