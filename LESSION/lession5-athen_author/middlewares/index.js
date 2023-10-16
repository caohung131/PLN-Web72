import { listUser } from '../index';
import { verifyToken } from '../utils/index.js';

const middlewwares = {
    verifyToken: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decode = verifyToken(token)
            req.userId = decode.userId;
            next()
        } catch (error) {
            res.status(403).json({
                data: null,
                success: false,
                messege: error.message
            })
        }
    },

    validateUser: (req, res, next) => {
        try {
            const findUser = listUser.find(user => user.id === req.userId);
            if (!findUser) throw new Error("Không hợp lệ");
            next();
        } catch (error) {
                res.status(403).json({
                    data: null,
                    success: false,
                    messege: error.message
                })
        }
    }
}

export default middlewwares