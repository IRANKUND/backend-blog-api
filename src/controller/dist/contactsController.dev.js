"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteContact = exports.modifyContact = exports.allContactsById = exports.addcontacts = exports.allContacts = void 0;

var _message = _interopRequireDefault(require("../models/message"));

var _uuid = require("uuid");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allContacts = function allContacts(req, res) {
  _message["default"].find().exec().then(function (doc) {
    console.log(doc);
    res.status(200).json(doc);
  })["catch"](function (err) {
    res.status(500).json({
      error: err
    });
  });
};

exports.allContacts = allContacts;

var addcontacts = function addcontacts(req, res) {
  var message = new _message["default"]({
    names: req.body.names,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });
  message.save().then(function (result) {
    console.log(result);
    res.json({
      result: result
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.addcontacts = addcontacts;

var allContactsById = function allContactsById(req, res) {
  var id = req.params.id;

  _message["default"].findById(id).exec().then(function (doc) {
    console.log('data from database', doc);

    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({
        message: 'No valid entry found for provided id'
      });
    }
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

exports.allContactsById = allContactsById;

var modifyContact = function modifyContact(req, res) {
  var id = req.params.id;
  var updateOps = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = req.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ops = _step.value;
      updateOps[ops.propName] = ops.value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  _message["default"].update({
    _id: id
  }, {
    $set: updateOps
  }).exec().then(function (result) {
    console.log(result);
    res.status(200).json(result);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

exports.modifyContact = modifyContact;

var deleteContact = function deleteContact(req, res) {
  var id = req.params.id;

  _message["default"].remove({
    _id: id
  }).exec().then(function (result) {
    res.status(200).json(result);
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
};

exports.deleteContact = deleteContact;