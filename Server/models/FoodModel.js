const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    pickup: {
        type: String,
        required: true,
    },
    food: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    prefTime: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    location: {
        lat: String,
        long: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
