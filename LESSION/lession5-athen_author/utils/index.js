import jwt from 'jsonwebtoken';

const SECRET_KEY = '23212755^%$';

const generateToken = (data) => {
    const token = jwt.sign(data, SECRET_KEY, {
        expiresIn: 5000
    })
    return token;
}

const verifyToken = (token) => {
    const getDecode = jwt.verify(token, SECRET_KEY);
    return getDecode

}

export {
    generateToken, verifyToken
}