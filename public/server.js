const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12344321',
    database: 'agendamento'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(express.json());

app.get('/api/check-availability', (req, res) => {
    const { date, time } = req.query;
    
    const query = `
        SELECT * FROM Agendamentos 
        WHERE Data = ? AND HorarioID = (
            SELECT ID FROM Horarios WHERE HoraInicio <= ? AND HoraFim > ?
        ) 
        UNION 
        SELECT * FROM Block 
        WHERE Data = ? AND HorarioID = (
            SELECT ID FROM Horarios WHERE HoraInicio <= ? AND HoraFim > ?
        )`;
    
    db.query(query, [date, time, time, date, time, time], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
        }
        res.json({ isAvailable: results.length === 0 });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
