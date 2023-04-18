const express = require('express')
const router = express.Router()
// const Post = require('../model/postSchema')
const Post = require('../controller/post.model')
const mongoose = require('mongoose')
const postController = require('../controller/post.model')


// handle get request for products
router.get('/',postController.getPosts)
//  (req, res) => {
//     res.status(200).json({
//         msg: "This is GET request for username"
//     })
// })

// handle post request for products
router.post('/',postController.createPost)
//  (req, res) => {

    //  console.log(req.body)
    //  console.log(req.body.fullname) 
    //  console.log(req.body.email)
    //  console.log(req.body.password)
    //  console.log(req.body.mobile)

// 1.create object of model
// const username = new Username({
//     _id:new mongoose.Types.ObjectId(),
//     fullname: req.body.fullname,
//     email: req.body.email,
//     password: req.body.password,
//     mobile:req.body.mobile
// })

// 2.save this to database
// username.save()
//     .then((res)=>{
//         console.log(res)
//     })

//     .catch((err)=>{
//         console.log(err)
//     })


//     res.status(200).json({
//         msg: "This is POST request for username",
//         statusMSG: "Username Created Sucesssfully",
//         username: username
//     })
// })

// handle single get request for products

router.get('/:postId' ,postController.getPostById,)
//  (req, res) => {
//     const id = req.params.usernameID

//     if (id == "7") {
//         res.status(200).json({
//             msg: "Congrates! You have won a special id with good cashback"
//         })
//     } else {
//         res.status(200).json({
//             msg: "Oops! You have regular id with no cashback"
//         })
//     }
// })


// handle PUT request for products
router.put('/:postId',postController.updatePost)
//  (req, res) => {
//     const id = req.params.usernameID
//     res.status(200).json({
//         msg: "This is PUT request for username",
//         id: id

//     })
// })

// handle Delete request for products
router.delete('/:postId',postController.deletePost)
//  (req, res) => {
//     const id = req.params.usernameID
//     res.status(200).json({
//         msg: "This is PUT request for username",
//         id: id

//     })
// })

module.exports = router
