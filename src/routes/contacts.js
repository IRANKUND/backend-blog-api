import {Router} from 'express';
import {checkUser} from '../midleware/authoruser';
import {allContacts, allContactsById ,addcontacts, modifyContact, deleteContact} from '../controller/contactsController';
import {allUsers, allUsersById, addUsers, modifyUsers, deleteUser} from '../controller/usersController';
import {allBlogs, addBlog, modifyBlog, allBlogById, deleteBlog} from '../controller/blogcontroller';
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
//route.get('/blogs', allBlogs);
///route.patch('/blogs/:id', modifyBlog);
//route.get('/blogs/:id', allBlogById);
//route.delete('/blogs/:id', deleteBlog);
route.get('/comments', allComment);
route.post('/comments/id', addcomments);
route.patch('/comments/:id',modifyComment);
route.get('/comments/:id',commentsById);
route.delete('/comments/:id', deletecomement);

export default route;

