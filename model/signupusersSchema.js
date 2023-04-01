const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signupuserSchema = Schema({

    _id: Schema.Types.ObjectId,
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true }

})

module.exports = mongoose.model("Signupuser",signupuserSchema)