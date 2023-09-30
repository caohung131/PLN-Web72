const studentRouter = require('./studentRouter')
const teacherRouter = require('./teacherRouter')

const router = require('express').Router();

router.use('/user/student', studentRouter)

router.use('/user/teacher', teacherRouter)

module.exports = router;