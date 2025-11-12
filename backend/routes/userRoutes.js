import express from 'express';
import {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersByID,
  updateUser,
  getFavorites,
  addFavorite,
  removeFavorite,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);

// Protected user routes
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Favorites routes FIRST (before :id)
router.route('/favorites')
  .get(protect, getFavorites);
router.route('/favorites/:id')
  .post(protect, addFavorite)
  .delete(protect, removeFavorite);

// Admin routes
router.route('/')
  .get(protect, admin, getUsers);
router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUsersByID)
  .put(protect, admin, updateUser);

export default router;
