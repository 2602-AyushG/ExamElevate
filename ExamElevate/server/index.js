const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');// installed this because you can't call your api's from you web server

// For Mongo Atlas
connectToMongo();

// For Mongo Compass
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1/book")

const app = express()
const port = 8000

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Courseation Server is listening on port ${port}`)
})