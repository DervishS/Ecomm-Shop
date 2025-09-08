import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body;

    //check if there is a user with such email
    const user = await User.findOne({ email: email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc Register user
// @route GET /api/users
// @access Public
const registerUser = asyncHandler (async (req, res) => {
    res.send('register user');
});

// @desc Logout user & clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler (async (req, res) => {
    res.send('Logout user');
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler (async (req, res) => {
    res.send('Get user profile');
});

// @desc Update user profile
// @route PUT /api/users/profile (we don't have ID because we use Token)
// @access Private
const updateUserProfile = asyncHandler (async (req, res) => {
    res.send('Update user profile');
});

// @desc Get all user profile
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler (async (req, res) => {
    res.send('Get all user profiles');
});

// @desc Get user by ID
// @route GET /api/users
// @access Private/Admin
const getUsersByID = asyncHandler (async (req, res) => {
    res.send('Get specific user profile');
});

// @desc Delete user profile
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler (async (req, res) => {
    res.send('Delete user');
});

// @desc Update user profile
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler (async (req, res) => {
    res.send('Update user');
});

export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUsersByID,
    updateUser,
};