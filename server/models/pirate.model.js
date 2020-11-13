const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"],
        minlength: [2, "Name must be at least 2 letters"]
    },
    image: {
        type: String,
        required: [true, "An Image Url is required"],
        minlength: [30, "Please use an image url"]
    },
    chests: {
        type: Number,
        required: [true, "Please enter a number"],
        min: [0, "Can't be less than zero(0)"]
    },
    phrase: {
        type: String,
        required: [true, "Please enter a catch phrase"]
    },
    position: {
        type: String,
        required: true
    },
    peg: {
        type: Boolean,
        required: true
    },
    patch: {
        type: Boolean,
        required: true
    },
    hook: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports.Pirate = mongoose.model("Pirate", PirateSchema)