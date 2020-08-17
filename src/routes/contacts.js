import {Router} from 'express';
import {allContacts, allContactsById ,addcontacts, modifyContact, deleteContact} from '../controller/contactsController';
import {allUsers, allUsersById, addUsers, modifyUsers, deleteUser} from '../controller/usersController';
import {allBlogs, addBlog, modifyBlog, allBlogById, deleteBlog} from '../controller/blogcontroller';
import {allComment, addcomments} from '../controller/commentController';
const route= Router();

route.get('/contacts', allContacts);
route.post('/contacts', addcontacts);
route.get('/contacts/:id', allContactsById);
route.put('/contacts/:id', modifyContact);
route.delete('/contacts/:id', deleteContact);
route.get('/users', allUsers);
route.get('/users/:id', allUsersById);
route.post('/users', addUsers);
route.put('/users/:id', modifyUsers);
route.delete('/users/:id', deleteUser);
route.get('/blogs', allBlogs);
route.post('/blogs', addBlog);
route.put('/blogs/:id', modifyBlog);
route.get('/blogs/:id', allBlogById);
route.delete('/blogs/:id', deleteBlog);
route.get('/comments', allComment);
route.post('/comments', addcomments);
export default route;

