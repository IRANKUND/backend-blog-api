import {Router} from 'express';
import verify from '../midleware/verifyToken';
import {allContacts, allContactsById ,addcontacts, modifyContact, deleteContact} from '../controller/contactsController';
import {allUsers, allUsersById, addUsers, modifyUsers, deleteUser} from '../controller/usersController';
import {allBlogs, addBlogs, modifyBlog, allBlogById, deleteBlog} from '../controller/blogcontroller';
import {allComment, addcomments,modifyComment, commentsById, deletecomement} from '../controller/commentController';

const route= Router();

route.get('/contacts', allContacts);
route.post('/contacts', addcontacts);
route.get('/contacts/:id', allContactsById);
route.patch('/contacts/:id', modifyContact);
route.delete('/contacts/:id',  deleteContact);
route.get('/users', allUsers);
route.get('/users/:id',  allUsersById);
route.post('/users', addUsers);
route.put('/users/:id',  modifyUsers);
route.delete('/users/:id',  deleteUser);
route.get('/blogs',verify, allBlogs);
route.post('/blogs',verify, addBlogs);
route.patch('/blogs/:id',verify ,  modifyBlog);
route.get('/blogs/:id',verify, allBlogById);
route.delete('/blogs/:id',verify , deleteBlog);
route.get('/comments', allComment);
route.post('/comments', addcomments);
route.patch('/comments/:id',modifyComment);
route.get('/comments/:id',commentsById);
route.delete('/comments/:id', deletecomement);

export default route;

