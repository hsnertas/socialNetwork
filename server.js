// importing
const express = require('express');
const connectDB = require('./config/db.js');
// app config
const app = express();
const port = process.env.PORT || 5000;

// init middleware
app.use(express.json({ extended: false }));
// db config
connectDB();
// api routes
app.get('/', (req, res) => res.send('Hello World'));
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
