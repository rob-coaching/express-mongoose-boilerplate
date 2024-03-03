import './db-connect.js'
import express from "express";
import cors from 'cors';
import User from './models/User.js';
const app = express();

app.use(cors()) // ALLOW ACCESS TO BACKEND FROM BROWSER (=from fetch)
app.use(express.json()) // PARSE INCOMING JSON DATA into special variable req.body

// HOME route
app.get("/", (req, res) => {
  res.send("Hello from API!");
});

// USERS route (getting data from database)
app.get("/users", async (req, res) => {
  const usersAll = await User.find()
  res.json( usersAll ) 
})

// start API on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
