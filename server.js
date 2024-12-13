const express = require('express');
const bodyParser = require('body-parser');
const Surreal = require('surrealdb.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// اتصال به SurrealDB
const db = new Surreal();
db.connect('http://localhost:8000', 'root', 'root');  // تنظیمات سورئل دی‌بی برای ورود

// راه‌اندازی API برای ساخت دیتابیس و کاربر
app.post('/setup-database', async (req, res) => {
    try {
        await db.query('CREATE DATABASE IF NOT EXISTS future');
        await db.query('USE future');
        await db.query('CREATE TABLE IF NOT EXISTS users (name STRING, email STRING)');
        res.status(200).send('Database and table created successfully');
    } catch (error) {
        res.status(500).send('Error setting up database: ' + error.message);
    }
});

// API برای ایجاد کاربر
app.post('/create-user', async (req, res) => {
    const { name, email } = req.body;
    try {
        await db.query(`INSERT INTO users (name, email) VALUES ('${name}', '${email}')`);
        res.status(200).send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user: ' + error.message);
    }
});

// API برای فچ کردن اطلاعات کاربر
app.get('/get-users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send('Error fetching users: ' + error.message);
    }
});

// راه‌اندازی سرور
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
