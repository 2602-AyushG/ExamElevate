import express from 'express';
import dbConnect from './lib/dbConnect.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        optionsSuccessStatus: 200
    }
));
app.get('/', (req, res) => {
    res.status(200).json({
        message:'Hello world'
    })
});

dbConnect({app})
.catch((err) => console.error(err));