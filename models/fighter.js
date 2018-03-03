const orm = require('../config/orm.js');
let fighter = {
  	selectAll: function(callback) {
    	orm.selectAll('fighters', function(res) {
      		callback(res);
    	});
  	},
 	insertOne: function(columns, values, callback) {
    	orm.insertOne('fighters', columns, values, function(res) {
      		callback(res);
    	});
  	},
  	updateOne: function(columnValues, condition, callback) {
    	orm.updateOne('fighters', columnValues, condition, function(res) {
      		callback(res);
    	});
  	}
};

module.exports = fighter;