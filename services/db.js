const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASS || '',
	database: process.env.DB_TYPE || 'node_api'
});

connection.connect((req, res, error) => {
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database connection established!');
	}
});

module.exports = connection;