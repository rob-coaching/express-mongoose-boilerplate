import './db-connect.js'
import express from "express";
import User from './models/User.js';
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from API!");
});

app.get("/users", async (req, res) => {
  const usersAll = await User.find()
  res.json( usersAll ) 
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
