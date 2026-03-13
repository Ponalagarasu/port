const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('.')); // Serves your index.html and style.css
app.use(bodyParser.urlencoded({ extended: true }));

// ✦ ASYNCHRONOUS DATA HANDLING: GET personal info
app.get('/api/data', (req, res) => {
    // Using callback-based fs.readFile as per requirements
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading data");
        }
        res.json(JSON.parse(data));
    });
});

// ✦ CONTACT FORM HANDLING
app.post('/contact', (req, res) => {
    const contactData = req.body;
    console.log("New Contact Request:", contactData);

    // In a real app, you would save this to a database or send an email
    res.status(200).send({ message: "Success" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});