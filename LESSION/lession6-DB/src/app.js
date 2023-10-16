import express from 'express';
import router from './routers/index.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDb } from '../database/index.js';

dotenv.config();

const {POST} = process.env

const app = express();

connectDb();

app.use(express.json());

app.use("/api", router);



app.listen(POST, (req, res) => {
    console.log("first")
});