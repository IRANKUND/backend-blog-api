"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _bodyParser = _interopRequireWildcard(require("body-parser"));

var _contacts = _interopRequireDefault(require("./routes/contacts.js"));

var _authoruser = _interopRequireWildcard(require("./midleware/authoruser"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var PORT = process.env.PORT || 3000;
var SECRET_KEY = process.env.SECRET_KEY;
var DB_CONNECT = process.env.DB_CONNECT;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

_mongoose["default"].connect(DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  console.log("connectedd to DB");
});

app.use('/', _contacts["default"]);
app.use('/', _authoruser["default"]);
app.get('/', function (req, res) {
  res.json({
    message: "Welcome"
  });
});
app.post('/api/use', _authoruser.checkUser, function (req, res) {
  _jsonwebtoken["default"].verify(req.token, SECRET_KEY, function (err, authData) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "user created",
        authData: authData
      });
    }
  });
}); // function checktoken(req, res, next){
//     const bearerHeader= req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined' ){
//         const bearer =bearerHeader.split(' ');
//         const bearerToken=bearer[1];
//         req.token=bearerToken;
//         next();
//     }else{
//         res.sendStatus('403');
//     }
//}

app.use(function (req, res, next) {
  next(_httpErrors["default"].NotFound());
});
app.use(function (error, req, res, next) {
  res.status = error.status || 404;
  res.send({
    status: error.status,
    message: error.message
  });
});
app.listen(PORT, function () {
  console.log("server is running on Port ".concat(PORT));
});
var _default = app;
exports["default"] = _default;