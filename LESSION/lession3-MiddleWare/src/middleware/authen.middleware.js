const jwt = require("jsonwebtoken");
module.exports = authMiddleware = (req, res, next) => {
    const token = req.headers['x-access-token'];
    const SECRET_KEY = 'Mindx_Web_SECRET_KEY';
    
    console.log({
        "server" : token
    })
    console.log("Post")

    if(!token) {
        return res.status(400).send({
            message: "Missing access token"
        })
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        
        next();
    } catch (error) {
        return res.status(401).send(error)
    }
};