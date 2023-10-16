const { Router } = require('express');
const { checkUser } = require('../middleware/checkUser');
const crypto = require('crypto');
const posts = require('../data/post');
const checkPostExist = require('../middleware/checkPostExist');
const postRouter = Router();

const jwt = require("jsonwebtoken");


postRouter.get('/' ,(req, res) => {

    return res.status(400).json({
        "Post":posts
    });
})

postRouter.post('/', checkUser ,(req, res) => {
    const {userId } = req.query
    const body = req.body;
    const newPost = {
        ...body,
        id: crypto.randomUUID(),
        userId: userId,
    }

    posts.push(newPost)
    return res.status(200).json(posts);
})


// update mà có middleware chuyền từ req trc qua 54:00 anh thắng
postRouter.put('/:id', checkUser , checkPostExist,(req, res) => {
    const {postIndex} = req;
    // console.log(postIndex)
    const body = req.body;
    const title = req.body.title;

    posts[postIndex].title = title;
    posts[postIndex].body = body
    return res.status(200).json(posts);
})

postRouter.delete('/:id', checkUser , checkPostExist,(req, res) => {
    const {postIndex} = req;
    // console.log(postIndex)
    var arr1 = [1,5,8,9];
console.log(arr1.splice(1,2));
    posts.splice(postIndex, 1);
    return res.status(200).json(posts);
})

// bai7  xóa user xóa luôn post nói ý tưởng thôi

module.exports = postRouter;