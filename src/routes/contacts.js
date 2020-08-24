import {Router} from 'express';
import {checkUser} from '../midleware/authoruser';
import {allContacts, allContactsById ,addcontacts, modifyContact, deleteContact} from '../controller/contactsController';
import {allUsers, allUsersById, addUsers, modifyUsers, deleteUser} from '../controller/usersController';
import {allBlogs, addBlog, modifyBlog, allBlogById, deleteBlog} from '../controller/blogcontroller';
import {allComment, addcomments,modifyComment, commentsById, deletecomement} from '../controller/commentController';
const route= Router();

route.get('/contacts',checkUser, allContacts);
route.post('/contacts', checkUser,addcontacts);
route.get('/contacts/:id',checkUser, allContactsById);
route.put('/contacts/:id', checkUser,modifyContact);
route.delete('/contacts/:id', checkUser, deleteContact);
route.get('/users', allUsers);
route.get('/users/:id', checkUser, allUsersById);
route.post('/users', checkUser,addUsers);
route.put('/users/:id', checkUser, modifyUsers);
route.delete('/users/:id', checkUser, deleteUser);
route.get('/blogs', allBlogs);
route.post('/blogs', addBlog);
route.put('/blogs/:id', modifyBlog);
route.get('/blogs/:id', allBlogById);
route.delete('/blogs/:id', deleteBlog);
route.get('/comments', allComment);
route.post('/comments', addcomments);
route.put('/comments/:id',modifyComment);
route.get('/comments/:id',commentsById);
route.delete('/comments/:id', deletecomement);
export default route;

