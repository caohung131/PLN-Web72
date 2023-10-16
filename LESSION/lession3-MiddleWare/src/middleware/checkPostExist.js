const posts = require("../data/post");

module.exports =  checkPostExist = (req, res, next) => {
    const {id} = req.params;
    const { userId} = req.query;

    const postIndex = posts.findIndex((itemt) => itemt.id === id &&  itemt.userId === userId)

    if(postIndex !==-1) {
        //vd chuyền qua của middlewware đây
        req.postIndex = postIndex;
        next();
        return;
    }
    res.status(404).send("Khong tìm thấy post")
}