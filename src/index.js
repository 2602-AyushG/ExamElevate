import express from 'express';
import dbConnect from './lib/dbConnect.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

dbConnect({app})
.catch((err) => console.error(err));