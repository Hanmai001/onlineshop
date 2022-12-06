// get the client
import mysql from 'mysql2/promise';
require('dotenv').config();

console.log("Creating connection pool...");
// create the connection to database
const db = { connection: null };

(async () => {
    // create the connection to database
    db.connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    });
    console.log('Database connected!');
})();

export default db;