const express = require("express");
const app = express();

// Middleware - routes se PEHLE
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to DevOps App 🚀");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// Server start - sirf ek baar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
