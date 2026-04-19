const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to DevOps App 🚀");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.listen(3000, () => console.log("Running on port 3000"));
