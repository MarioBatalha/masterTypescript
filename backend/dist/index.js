"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    return res.send("hello, world");
});
app.listen(3333);
exports["default"] = app;
