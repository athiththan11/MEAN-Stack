// book.model.js

"use strict";

const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String
    },
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }
    ],
    price: {
        type: Number
    },
    publish: {
        date: {
            type: Date
        },
        by: {
            type: String
        }
    },
    description: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Book", bookSchema);
