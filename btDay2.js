const express = require('express');
const app = express();

const router = require('./routers/');

app.use(express.json())

app.use(router)
app.listen(3001, (req, res) => {
    console.log('listening port 3001');
})

