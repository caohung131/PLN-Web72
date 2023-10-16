const express = require('express');

const router = require("./src/routers");

const app = express();

const PORT = 8000;

app.use(express.json())

// router.use()

app.use('/api', router);

app.listen(PORT, () => {
    console.log("Sever is listening on port "+PORT)
});