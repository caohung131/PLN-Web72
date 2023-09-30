const userRouter = require("./user.js")
const productRouter = require("./product.js")

const router = require('express').Router();


router.use('/user', userRouter);
router.use('/product', productRouter);

module.exports = router