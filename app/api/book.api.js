// book.api.js

"use strict";

const express = require("express"),
    mongoose = require("mongoose"),
    Author = mongoose.model("Author"),
    Book = mongoose.model("Book"),
    router = express.Router();

router.get("/", (req, res) => {
    Book.find()
        .populate("authors")
        .exec()
        .then((books) => {
            res.status(200).json(books);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .populate("authors")
        .exec()
        .then((book) => {
            res.status(200).json(book);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.post("/", (req, res) => {
    var book = new Book(req.body);

    book.save()
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.get("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
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
    Book.findByIdAndRemove(req.body.book)
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
