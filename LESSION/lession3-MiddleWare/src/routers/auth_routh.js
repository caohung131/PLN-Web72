const { Router } = require('express');
const jwt = require('jsonwebtoken');

const authRouter = Router();

const usersMockData = [
    {
        id: "1",
        username: "Caohung1",
        password: "Caohung@123",
        fulname: "CaoKhanhHung1"
    },
    {
        id: "2",
        username: "Caohung_Jokker",
        password: "Caohung@123",
        fulname: "CaoKhanhHung2"
    },
    {
        id: "3",
        username: "Caohung_Daddy",
        password: "Caohung@123",
        fulname: "CaoKhanhHung3"
    }
]

authRouter.post("/login", (req,res) => {
    const { username, password } = req.body;

    
    if(!username || !password) {
        return res.send(400).send({
            "messege": "Thiếu username hoặc password"
        });
    }

    const existingUser = usersMockData.find(
        user => user.username === username && user.password === password
        ); 

    if(!existingUser) {
        return res.status(401).send({
            messege: "Invalid username or password"
        })
    }

    const jwtPayload = {
        username : existingUser.username,
        id: existingUser.id,
        fulname: existingUser.fulname,
    }

    const SECRET_KEY = 'Mindx_Web_SECRET_KEY';
    const token = jwt.sign(jwtPayload, SECRET_KEY, { 
        expiresIn: "30s"
    })

    console.log( { token: token}
    )
    res.json({
        messege: "Api Login successfully",
        user: jwtPayload,
        accessToken: token
    })
})






module.exports = authRouter