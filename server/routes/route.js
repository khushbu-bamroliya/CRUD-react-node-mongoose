import express from "express"


import {addUser, getUsers,getSingleUser,editUser,deleteUser} from '../controller/userController.js'
const router = express.Router();

router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getSingleUser)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)
export default router
