const { keyword } = require('chalk');
const express = require('express');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Secondamendment_2',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});