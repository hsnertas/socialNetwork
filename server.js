// importing
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
// app config
const app = express();
const port = process.env.PORT || 5000;
// middleware

// db config
connectDB();
// api routes
app.get('/', (req, res) => res.send('Hello World'));
// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
