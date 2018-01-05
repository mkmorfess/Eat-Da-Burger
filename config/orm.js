var connection = require("./connection.js");

var orm = {
	create: function(table, colName, value, callback){
		var queryName = "INSERT INTO " + table + " (" + colName + ") VALUES ('" + value + "');"
		connection.query(queryName, function(err, result) {
	        if (err) {
	        	throw err;
	        }
	        callback(result);
	    });
	},
    all: function(select, table, callback) {
	    var queryName = "SELECT " + select + " FROM " + table + ";";
	    connection.query(queryName, function(err, result) {
		    if (err) {
		    	throw err;
		    }
    		callback(result);
    	});
  	},

  	delete: function(table, colName, value, callback) {
  		var queryName = "DELETE FROM " + table + " WHERE " + colName + " = '" + value + "';"
  		connection.query(queryName, function(err, result) {
  			if (err) {
		    	throw err;
		    }
    		callback(result);
  		});
  	},

  	update: function(table, colName1, value1, colName2, value2, callback) {
  		var queryName = "UPDATE " + table + " SET " + colName1 + " = '" + value1 + "' WHERE " + colName2 + " = '" + value2 + "';"

  		connection.query(queryName, function(err, result){
  			if (err) {
		    	throw err;
		    }
    		callback(result);
  		})
  	}


}

module.exports = orm;