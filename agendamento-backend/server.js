const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12344321',
  database: 'agendamento'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Recuperar agendamentos
app.get('/appointments', (req, res) => {
  connection.query('SELECT * FROM appointments', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Atualizar agendamentos
app.post('/appointments', (req, res) => {
  const newAppointment = req.body;
  connection.query('INSERT INTO appointments SET ?', newAppointment, (error, results) => {
    if (error) throw error;
    res.status(201).json({ id: results.insertId, ...newAppointment });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
