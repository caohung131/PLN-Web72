const { json } = require('express');

const router = require('express').Router();

let user = [
    { username: 'alice', apiKey: 'alice@123' },
    { username: 'bob', apiKey: 'bob@123' },
    { username: 'charlie', apiKey: 'charlie@123' }
]

router.get('/' , (req, res) => {
    return res.send({"Get user" : user})
})

router.post('/' , (req, res) => {
    const userName = req.body.userName;
    const apiKey = userName+'@123'

    user = [...user, {"username": userName, "apiKey": apiKey}];
    
    return res.status(200).send({ "Post user": user})

})

router.put('/:id' , (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const userName = req.body.userName;
    const result = user.map((itemt) => {
        if(itemt.apiKey == id) {
            itemt.username =  userName;
        } 
        return itemt;
    })

    return res.status(200).send({ "Put user": result})

})

router.patch('/:id' , (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const userName = req.body.userName;
    const result = user.map((itemt) => {
        if(itemt.apiKey == id) {
            itemt.username =  userName;
        } 
        return itemt;
    })

    return res.status(200).send({ "Patch user": result})
})

router.delete('/:id' , (req, res) => {
    const id = req.params.id;
    const result = user.filter((itemt) => {
        if(itemt.apiKey != id) {
            return itemt;
    }
})

    return res.status(200).send({ "Delete user": result})

})

module.exports = router;