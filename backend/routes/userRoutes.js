import express from "express";
const router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUsersByID,
    updateUser,
    addFavorite,
    removeFavorite,
    getFavorites,
 } from "../controllers/userController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

//api/users
router.route('/').post(registerUser)
    .get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUsersByID)
    .put(protect, admin, updateUser)
router.route('/favorites')
    .get(protect, getFavorites)
router.route('/favorites/:id')
    .post(protect, addFavorite)
    .delete(protect, removeFavorite);

export default router;