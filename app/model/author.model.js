// author.model.js

"use strict";

const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: {
        first: {
            type: String
        },
        last: {
            type: String
        }
    },
    bio: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Author", authorSchema);
