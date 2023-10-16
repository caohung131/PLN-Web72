const users = require("../data/user");

const checkUser = (req, res, next) => {
    const { userId } = req.query;
    if (!userId) {
        res.status(401).send("Không có userid")
        return;
    }
    const user = users.find((user) => user.id === userId)
    if (user) {
        next();
    }
}


module.exports = { checkUser }