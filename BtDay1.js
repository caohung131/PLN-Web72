const express = require('express');

const app = express();

app.get('/product', (req, res) => {
    const arr = [1,2,3];
    return res.status(200).send(arr);
})

app.post('/product', (req, res) => {
    res.status(200).send('Create product');
});

app.put('/product/:id', (req, res) => {
    console.log('Id cua ban truyen vao la: '+req.params.id);
    return res.status(200).send('Update success');
});

app.delete('/product/:id', (req, res) => {
    console.log('Id cua ban truyen vao la: '+req.params.id);
    return console.log('Remote success');
})

app.listen(3001, () => {
    console.log('listening on port 3001');
});