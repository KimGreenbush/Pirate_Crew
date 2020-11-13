const mongoose = require("mongoose")

const aSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"],
        minlength: [2, "Name must be at least 2 letters"]
    }
}, {timestamps: true})

module.exports.aSchema = mongoose.model("aSchema", aSchema)