const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: 'J190189433m!',
        database: 'election'
    },
    console.log('Connect to the election database.')
);

module.exports = db;