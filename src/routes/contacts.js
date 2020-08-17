import {Router} from 'express';
import {allContacts, allContactsById} from '../controller/contactsController';

const route= Router();

route.get('/contacts', allContacts);
route.get('/contacts/:id', allContactsById);
export default route;
