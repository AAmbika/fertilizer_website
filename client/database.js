const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Adjust as needed
    host: 'localhost', // Your host
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'test' // Your database name
});

// Example query
pool.query('SELECT * FROM your_table', (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
});

// Don't forget to end the pool when your application exits
process.on('exit', () => {
    pool.end((err) => {
        if (err) {
            return console.log('Error closing pool', err);
        }
        console.log('Pool closed');
    });
});
