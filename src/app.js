const express = require("express");
const bodyParser = require("body-parser");
const apis = require("./apis");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/", apis);

module.exports = app;
