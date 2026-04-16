const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to DevOps App 🚀');
});

app.get('/api', (req, res) => {
    res.json({ message: "Hello from backend" });
});

app.get('/health', (req, res) => {
    res.json({ status: "UP" });
});

app.listen(3000, () => console.log("Running on port 3000"));
