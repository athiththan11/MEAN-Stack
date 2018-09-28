// server.js

"use strict";

require("dotenv").config();
const path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    morgan = require("morgan");

const app = express();
var port = process.env.PORT || 8000;

// replace process.env.MONGO_DB with your mlab account credentials
// or just create a .env file containing MONGO_DB and value
mongoose.connect(
    process.env.MONGO_DB,
    { useNewUrlParser: true },
    (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("MongoDB is now connected");
    }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.set("/view", path.join(__dirname, "/public/view"));
app.use("/node", express.static(__dirname + "/node_modules"));
app.use("/bower", express.static(__dirname + "/bower_components"));

// models
require("./app/model/author.model");
require("./app/model/book.model");

// api
const authorApi = require("./app/api/author.api");
const bookApi = require("./app/api/book.api");

app.use("/api/authors", authorApi);
app.use("/api/books", bookApi);

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Server running on " + port);
});
