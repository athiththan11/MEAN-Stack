// author.api.js

"use strict";

const express = require("express"),
    mongoose = require("mongoose"),
    Author = mongoose.model("Author"),
    router = express.Router();

router.get("/", (req, res) => {
    Author.find()
        .exec()
        .then((authors) => {
            res.status(200).json(authors);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.get("/:id", (req, res) => {
    Author.findById(req.params.id)
        .exec()
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.post("/", (req, res) => {
    var author = new Author(req.body);

    author
        .save()
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.put("/:id", (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.delete("/", (req, res) => {
    Author.findByIdAndRemove(req.body.author)
        .exec()
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;
