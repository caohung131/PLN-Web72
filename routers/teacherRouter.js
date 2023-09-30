const { json } = require('express');

const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('get Teacher')
})

module.exports = router;