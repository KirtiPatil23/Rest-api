const mongoose = require('mongoose')
const Signupuser = require('../model/signupusersSchema')

// R from crud (get)

exports.getSignupusers = async (req, res) => {

    try {
        // create object of model
    
        const signupusers = await Signupuser.find();//
        res.status(200).json({
            msg: "All ID get fetched Successfully ",
          data :signupusers
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

exports.getSignupusersByID = async (req, res) => {

    try {
        // create object of model
    
        const signupuser = await Signupuser.findById(req.params.signupuserID);//
        res.status(200).json({
            msg: " ID get fetched Successfully ",
          data :signupuser
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
exports.createSignupuser = async (req, res) => {

    try {
        // create object of model
        const signupuser = new Signupuser({
            _id: new mongoose.Types.ObjectId(),
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile
        })

        const data = await signupuser.save();//call save method and wait for return
        res.status(200).json({
            msg: "Username created Successfully ",
            signupuser: data
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

exports.updateSignupuser= async (req, res) => {

    try {
        // create object of model
    
        const signupuser = await Signupuser.findByIdAndUpdate(req.params.signupuserID , req.body);//
        res.status(200).json({
            msg: " ID updated Successfully ",
          data :signupuser
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

exports.deleteSignupuser= async (req, res) => {

try {
    // create object of model

    const signupuser = await Signupuser.findByIdAndDelete(req.params.signupuserID );//
    res.status(200).json({
        msg: " ID deleted Successfully ",
      data :signupuser
    })
} catch (err) {
    res.status(501).json({
        code: 10,
        msg: "Something went wrong",
        err: err
    })
}
}