import express from 'express';
import catchAsyncError from '../errors/catchAsyncError.js';
import { findById, deleteUserById, getAllUsers, createNewUser, updateUserById, editPasswordById } from '../controllers/user.controller.js';
import { authRole } from '../middlewares/authentication.middleware.js';
import { ERoles } from '../types/global.js';
import { upload } from '../middlewares/uploadImage.middleware.js';
const router = express.Router();

// Routes For All User
router.get('/find/:id', catchAsyncError(findById));
router.delete('/delete/:id', catchAsyncError(deleteUserById));
router.put('/update/:id', catchAsyncError(updateUserById));
router.put('/editPassword/:id', catchAsyncError(editPasswordById));

/* Routes For Only Admin */
router.post('/admin/new', authRole(ERoles.admin), upload.single('imgSRC'), catchAsyncError(createNewUser));
router.get('/admin/all', authRole(ERoles.admin), catchAsyncError(getAllUsers));

export default router;
