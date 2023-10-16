import express from 'express';
import routerProduct from './product.js';
import userRouter from './user.js'

const router  = express.Router();

router.use("/products", routerProduct)
router.use("/users", userRouter)

export default router;