import {Router} from 'express';
import {allUsers} from '../controller/usersController';

const route= Router();
route.get('/user', allUsers);