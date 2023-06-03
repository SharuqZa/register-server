const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'server',
});

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/register', cors(),(req, res) => {
  const { name, address, email, password, acceptedTerms, gender } = req.body;

  const query = `INSERT INTO data (name, address, email, password, acceptedTerms, gender) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [name, address, email, password, acceptedTerms, gender];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving data to database');
    } else {
      res.status(200).send('Registration successful');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});