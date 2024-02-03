const express = require('express');
const mysql = require('mysql2');
const randomstring = require('randomstring');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root',
  database: ' '
});

db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(express.json());

app.post('/generate-invitation', (req, res) => {
  const code = randomstring.generate(8);

  const sql = 'INSERT INTO invitations (code) VALUES (?)';
  db.query(sql, [code], (err, result) => {
    if (err) {
      console.error('Error generating invitation:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ code });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
