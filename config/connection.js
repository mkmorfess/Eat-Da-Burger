var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root",
		database: "burgers_db"
	});
}

connection.connect(function(err){

	if (err) throw err;
	console.log("Connected");

});

module.exports = connection;