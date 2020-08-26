"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authoruser = require("../midleware/authoruser");

var _contactsController = require("../controller/contactsController");

var _usersController = require("../controller/usersController");

var _blogcontroller = require("../controller/blogcontroller");

var _commentController = require("../controller/commentController");

var _loginUser = require("../controller/loginUser");

var route = (0, _express.Router)();
route.get('/contacts', _authoruser.checkUser, _contactsController.allContacts);
route.post('/contacts', _authoruser.checkUser, _contactsController.addcontacts);
route.get('/contacts/:id', _authoruser.checkUser, _contactsController.allContactsById);
route.patch('/contacts/:id', _authoruser.checkUser, _contactsController.modifyContact);
route["delete"]('/contacts/:id', _authoruser.checkUser, _contactsController.deleteContact);
route.get('/users', _usersController.allUsers);
route.get('/users/:id', _authoruser.checkUser, _usersController.allUsersById);
route.post('/users', _authoruser.checkUser, _usersController.addUsers);
route.put('/users/:id', _authoruser.checkUser, _usersController.modifyUsers);
route["delete"]('/users/:id', _authoruser.checkUser, _usersController.deleteUser);
route.get('/blogs', _blogcontroller.allBlogs);
route.post('/blogs', _blogcontroller.addBlog);
route.put('/blogs/:id', _blogcontroller.modifyBlog);
route.get('/blogs/:id', _blogcontroller.allBlogById);
route["delete"]('/blogs/:id', _blogcontroller.deleteBlog);
route.get('/comments', _commentController.allComment);
route.post('/comments', _commentController.addcomments);
route.put('/comments/:id', _commentController.modifyComment);
route.get('/comments/:id', _commentController.commentsById);
route["delete"]('/comments/:id', _commentController.deletecomement);
route.post('/api/login', function (req, res) {
  return (0, _loginUser.login)(req, res);
});
var _default = route;
exports["default"] = _default;