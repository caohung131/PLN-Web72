import express from 'express';
import { login, sigUp } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/sign-up', sigUp)
userRouter.post('/login', login)

export default userRouter