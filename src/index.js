import express from 'express';
import dbConnect from './lib/dbConnect.js';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import resourceRouter from './routes/resource.routes.js';
dotenv.config();
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        optionsSuccessStatus: 200
    }
));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user',userRouter);
app.use('/resource',resourceRouter);

dbConnect({app})
.catch((err) => console.error(err));