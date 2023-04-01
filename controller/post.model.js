const mongoose = require('mongoose')
const Post = require('../model/postSchema')

// R from crud (get)

exports.getPosts = async (req, res) => {

    try {
        // create object of model

        const posts = await Post.find();//
        res.status(200).json({
            msg: "All post get fetched Successfully ",
            data: posts
        })

    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}



//  R from crud (get)for single 

exports.getPostById = async (req, res) => {

    try {
        // create object of model

        const post = await Post.findById(req.params.postId);//
        res.status(200).json({
            msg: " ID get fetched Successfully ",
            data: post
        })

    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}



// C from crud (post)
exports.createPost = async (req, res) => {

    try {
        // create object of model
        const post = new Post({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            image: req.body.image,
            profession: req.body.profession,
        })

        const data = await post.save();//call save method and wait for return
        res.status(200).json({
            msg: "Post created Successfully ",
            post: data
        })

    } catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}


//  U from crud (put)for single 

exports.updatePost = async (req, res) => {

    try {
        // create object of model

        const data = await Post.findByIdAndUpdate(req.params.postId, req.body);//
        res.status(200).json({
            msg: " Post updated Successfully ",
            post: data
        })
    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

//  D from crud (Delete)

exports.deletePost = async (req, res) => {

    try {
        // create object of model

        const data = await Post.findByIdAndDelete(req.params.postId);//
        res.status(200).json({
            msg: " post deleted Successfully ",
            post: data
        })
    } catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}