import express from 'express';

import { createUser , getUsers, getUser, updateUser, deleteUser} from '../controllers/users.js'

const router = express.Router();

// get method
router.get('/', getUsers)

//post method
router.post('/', createUser)

// patch method
router.patch('/:id', updateUser)

// get method
router.get('/:id', getUser)

// delete method
router.delete('/:id', deleteUser)

export default router;