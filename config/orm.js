const connection = require ('./connection.js');

const createQuestionMarks = function(number) {
	let questionArray = [];

	for (let i = 0; i < number; i++) {
		questionArray.push("?");
	}

	return questionArray.toString();
}

const objectForSQL = function(object) {
	let sqlArray = [];

	for (let key in object) {
		sqlArray.push(key + "=" + object[key]);
	}

	return sqlArray.toString();
}

let orm = {

	selectAll: function(tableInput, callback) {
		
		let queryString = "SELECT * FROM " + tableInput + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			callback(result);
		});
	},

	insertOne: function(table, columns, values, callback) {
		
		let queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${createQuestionMarks(values.length)})`;

		connection.query(queryString, values, function(err, result) {
			if (err) {
				throw err;
			}

			callback(result);
		});
	},

	updateOne: function(table, columnValues, condition, callback) {
		
		let queryString = `UPDATE ${table} SET ${objectForSQL(columnValues)} WHERE ${condition}`;

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			callback(result);
		});
	}
};

module.exports = orm;