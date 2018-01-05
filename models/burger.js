var orm = require("../config/orm.js");

var burger = {

  all: function(cb) {
    orm.all("*", "burgers", function(res) {
      cb(res);
    });
  },

  create: function(val, cb) {
    orm.create("burgers", "burger_name", val, function(res) {
      cb(res);
    });
  },
  
  delete: function(val, cb) {
    orm.delete("burgers", "id", val, function(res) {
      cb(res);
    });
  },

  update: function(val1, val2, cb) {
    orm.update("burgers", "burger_name", val1, "id", val2, function(res){
      cb(res);
    });
  }
};


module.exports = burger;
