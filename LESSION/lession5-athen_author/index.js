import express from "express";
import crypto from "crypto";
import { generateToken } from "./utils/index.js";
import middlewwares from "./middlewares/index.js";

const app = express();
app.use(express.json());

export const listUser = [
    {
        id: crypto.randomUUID(),
        userName: "Hung dep trai",
        age: 10,
        email: "Hungdep@gmail.com",
        location: "Hà Nội",
        password: '123'
    }
];

app.post('/api/auth/login', (req, res) => {

    try {
        const {email, password} = req.body;
        if(!email) throw new Error("Thiếu email");
        if(!password) throw new Error("Thiếu password");

        const existedUser = listUser.find(user => (user.email === email && user.password === password))
        if(!existedUser) throw new Error("Sai tài khoản hoặc mật khẩu");
        res.status(200).send({
            data: generateToken({userId: existedUser.userId}),
            success: true,
            message: 'Đăng nhập thành công'
        })
    } catch (error) {
        res.status(404).send({
            data: null,
            success: false,
            message: error.message
        })
    }
})


app.get('/api/user-info/',middlewwares.verifyToken ,middlewwares.validateUser, (req, res) => {
    try {
        
        const {id} = req.params;
        res.status(200).send({
            data: decode, 
            success: true, 
            message: "Tìm thấy"
        })
    } catch (error) {
        res.status(500).send({
            data: null,
            success:false,
            message: error.message
        })
    }
});

app.get('/api/user-info/:id', (req, res) => {
    try {
        const {id} = req.params;
        const foundUser = listUser.find(user => user.id === id);
        if(!foundUser) throw new Error("Không tìm thấy user")
        res.status(200).send({
            data: foundUser, 
            success: true, 
            message: "Tìm thấy"
        })
    } catch (error) {
        res.status(500).send({
            data: null,
            success:false,
            message: error.message
        })
    }
});

//30 làm việc với token
// 45 jwt token

app.listen(3000, (res, req) => {
    console.log('server listening on')
})
