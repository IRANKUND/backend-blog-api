"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var meassageSchema = _mongoose["default"].Schema({
  names: String,
  email: String,
  phone: String,
  message: String
});

module.exports = _mongoose["default"].model('message', meassageSchema);