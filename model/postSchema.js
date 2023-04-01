const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema({

    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    image: { type: String, required: true },
    profession: { type: String, required: true },

})

module.exports = mongoose.model("Post", postSchema)