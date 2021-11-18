"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json('welcome');
});
/*
const mongoURL = "mongodb+srv://TheJokerV18:Thegamers4@cluster0.arops.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true});
*/

var _default = app;
exports["default"] = _default;