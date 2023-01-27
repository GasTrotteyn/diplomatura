const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB_NAME,
	port: 3306,
});

pool.query = util.promisify(pool.query);

module.exports = pool;
