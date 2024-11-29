// // Import dependencies
// const express = require("express");
// const mysql = require("mysql");
// require("dotenv").config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 3100;

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     process.exit(1); // Exit on failure
//   }
//   console.log("Connected to the MySQL database");
// });

// // Middleware to parse JSON
// app.use(express.json());

// // API endpoint to test the connection
// // app.get("/api/test", (req, res) => {
// //   db.query("SELECT 1 + 1 AS solution", (err, results) => {
// //     if (err) {
// //       console.error("Error running query:", err);
// //       return res.status(500).send("Database query failed");
// //     }
// //     res.json({ solution: results[0].solution });
// //   });
// // });

// // Example endpoint to fetch data from a "users" table
// // app.get("/api/users", (req, res) => {
// //   db.query("SELECT * FROM users", (err, results) => {
// //     if (err) {
// //       console.error("Error fetching users:", err);
// //       return res.status(500).send("Error fetching users");
// //     }
// //     res.json(results);
// //   });
// // });

// // Example endpoint to insert a new user
// // app.post("/api/users", (req, res) => {
// //   const { name, email } = req.body;

// //   if (!name || !email) {
// //     return res.status(400).send("Name and email are required");
// //   }

// //   const query = "INSERT INTO users (name, email) VALUES (?, ?)";
// //   db.query(query, [name, email], (err, result) => {
// //     if (err) {
// //       console.error("Error inserting user:", err);
// //       return res.status(500).send("Error inserting user");
// //     }
// //     res.json({ id: result.insertId, name, email });
// //   });
// // });

// // Start the server
// app.listen(PORT, () => {
 /* console.log(); */
// });

// module.exports = app

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Admin@12',
    database: 'mean_stack'
});

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');
// });


// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
        connection.release(); // Release the connection after testing
    }
});

module.exports = pool.promise();


