const { json } = require('express');

const router = require('express').Router();


const products = [
    {
        id: 1,
        userName: "Hung",
        price: 222
    }
]

// app.use(json.)


// Thực hành tiêu chuẩn Restful API
router.get('/product', (req, res) => {
    return res.status(200).json({ messege: "Get Hello!", user });
});

router.post('/product', (req, res) => {
    const userName = req.body.userName;
    const userAge = req.body.userName;
    const id = req.body.id;
    console.log(userName, userAge);
    const newUser = {id: id, name: userName, age: userAge};
    return res.status(200).json({ messege: "Post Hello!" , user:[...user, newUser]  } );

})

router.put('/product/:id', (req, res) => {
    const userName = req.body.userName;
    const userAge = req.body.userName;
    const id =  req.params.id;


    const result = user.map(itemt => {
        if(itemt.id == id) {
            itemt.userName = userName;
            itemt.userAge = userAge;
        }
        return itemt;
    })

    return res.status(200).json({ messege: "put Hello!" , user: result});
})

router.patch('/product/:id', (req, res) => {
    const userName = req.body.userName;
    const userAge = req.body.userName;
    const id =  req.params.id;


    const result = user.map(itemt => {
        if(itemt.id == id) {
            itemt.userName = userName;
            itemt.userAge = userAge;
        }
        return itemt;
    })
    return res.status(200).json({ messege: "Patch Hello!" , user: result });
});

router.delete('/product/:id', (req, res) => {
    const id = req.params.id;

    // lọc id khác thằng bằng mình bỏ đi
    const result = user.filter(itemt => itemt.id != id);

    return res.status(200).json({ messege: "Delete Hello!" , user: result });
});


module.exports = router;

// export ra  