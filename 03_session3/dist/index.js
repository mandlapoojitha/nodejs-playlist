"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// const express= require('express')

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send("hello poojitha");
});
app.listen(3000, function (req, res) {
  console.log("app listening at port 3000");
});