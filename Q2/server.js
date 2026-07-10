const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'Q2_js'
});

db.connect((err) => {
    if (err) {
        console.error('Connect MySql failed', err);
        return;
    }
    console.log('Connect MySql successful');
});

//Get all users
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM Users';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching users', error: err });
        } else {
            res.json(results);
        }
    });
});

//Get user by id
app.get('/api/users/:id', (req, res) => {
    const sql = 'SELECT * FROM Users Where Id = ?';
    const userId = req.params.id;
    db.query(sql, [userId], (err, results) => {
        if (err) {
            res.status(500).json({message: 'Error fetching user', error: err});
        }
        if (results.length===0) {
            res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(results[0]);
    });
});

//Create user
app.post('/api/users',(req,res) => {
    const {name,email} = req.body;
    const sql = 'INSERT INTO Users(Name,Email) VALUES (?,?)';
    db.query(sql, [name,email],(err,results) => {
        if (err) {
            res.status(500).json({message: 'Error fetching user', error: err});
        }
        res.status(201).json({message: 'User created', userId: results.insertId});
    });
});

//Update users
app.put('/api/users/:id',(req,res) => {
    const userId = req.params.id;
    const {name,email} = req.body;
    const sql = 'UPDATE Users SET Name = ?, Email = ? Where Id = ?';
    db.query(sql,[name,email,userId], (err,results) => {
        if (err) {
            res.status(500).json({message: 'Error fetching user', error: err});
        }
        if (results.affectedRows===0) {
            res.status(400).json({message: 'User not found'});
        }
        res.status(200).json({message: 'Update successful'});
    });
});

//delete user
app.delete('/api/users/:id', (req,res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM Users Where Id = ?';
    db.query(sql,[userId],(err,results) => {
        if (err) {
            res.status(500).json({message: 'Error fetching user', error: err});
        }
        if (results.affectedRows===0) {
            res.status(400).json({message: 'User not found'});
        }
        res.status(200).json({message: 'User deleted'});
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})