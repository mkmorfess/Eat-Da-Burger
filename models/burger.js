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

  update: function(val, cb) {
    orm.update("burgers", "devoured", 1, "id", val, function(res){
      cb(res);
    });
  }
};


module.exports = burger;
