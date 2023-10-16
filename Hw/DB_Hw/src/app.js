import express from 'express';
// import dotenv from 'dotenv';
import router from './routers/index.js';
import mongoose from 'mongoose';
import { connectDb } from '../Database/index.js'
// dotenv.config();
// const {PORT_ENV} = process.env;
// console.log(PORT_ENV)

const app = express();

connectDb();

app.use(express.json());

app.use("/api", router)


app.listen(3002, (req, res) => {
    console.log("Listening on port " + 3002)
});