const express = require('express')
const app = express()
const signupusersRouter = require('./routes/signupusers')
const postsRouter = require('./routes/posts')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
require('dotenv').config()


// app.use((req,res)=>{
//     res.status(200).json({
//         msg:"This is simple get request"
//     })
// })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

app.use(
    cors({
        origin:"*"
    })
)

app.use(morgan("dev"))


mongoose.connect(process.env.mongoConnection)

app.use('/signupuser', signupusersRouter)
app.use('/post',postsRouter)


module.exports = app
