// get the client
import mysql from 'mysql2/promise';

console.log("Creating connection pool...");
// create the connection to database
// const db = { connection: null };

// (async () => {
//     // create the connection to database
//     db.connection = await mysql.createConnection({
//         host: process.env.DB_HOST || 'localhost',
//         user: process.env.DB_USER || 'root',
//         database: process.env.DB_NAME || 'onlineshop',
//         password: process.env.DB_PASSWORD || 'root'
//     });
//     console.log('Database connected!');
// })();
const db = mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        database: process.env.DB_NAME || 'onlineshop',
        password: process.env.DB_PASSWORD || 'root'
});

export default db;