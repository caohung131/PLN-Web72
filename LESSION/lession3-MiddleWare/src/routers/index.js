const { Router } = require("express");
const userRouter = require("./user.js")
const postRouter = require("./post.js")
const authRouter = require("./auth_routh");
const authenMiddleware = require("../middleware/authen.middleware.js");

const router = Router();

router.use('/auth' ,authRouter);
router.use('/posts',authenMiddleware ,postRouter);

module.exports = router;