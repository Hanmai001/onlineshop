// get the client
import mysql from 'mysql2/promise';

console.log("Creating connection pool...");
// create the connection to database
const db = { connection: null };

(async () => {
    // create the connection to database
    db.connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'onlineshop',
        password: 'quang234'
    });
    console.log('Database connected!');
})();

export default db;