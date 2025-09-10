import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc create new order
// @route POST /api/orders
// @access private
const addOrderItems = asyncHandler (async (req, res) => {
    res.send('Add order items');
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access private
const getMyOrders = asyncHandler (async (req, res) => {
    res.send('get my orders');
});

// @desc Get logged in user orders
// @route GET /api/orders/:id
// @access private
const getOrderById = asyncHandler (async (req, res) => {
    res.send('get my orders by ID');
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access private/admin
const updateOrderToPaid = asyncHandler (async (req, res) => {
    res.send('update order to paid');
});

// @desc Update to delivered
// @route GET /api/orders/:id/deliver
// @access private/admin
const updateOrderToDelivered = asyncHandler (async (req, res) => {
    res.send('update order to delivered');
});

// @desc Get all orders
// @route GET /api/orders
// @access private/admin
const getOrders = asyncHandler (async (req, res) => {
    res.send('get all orders');
});

export {addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders};