const { Router } = require('express')
const userRouter = Router();
const {logAPI} = require('../middleware/logAPI.js')

const users = require("../data/user");
userRouter.get('/', (req, res) => {
    logAPI();
    res.status(200).json({users})
})

userRouter.get('/:id',logAPI, (req, res) => {
    return res.status(200).json({users})
})


userRouter.post('/',logAPI ,(req, res) => {
    res.status(200).json({users})
})

module.exports = userRouter;