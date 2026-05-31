import express, { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/userController.js';


const route = express.Router();
route.get ('/', getAllUsers);
route.get ('/:id', getUserById);
route.post ('/', createUser);
route.put ('/:id',updateUser ); 
route.delete ('/:id' , deleteUser);

export default route;