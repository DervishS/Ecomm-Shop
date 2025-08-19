import express from "express";
const router = express.Router();
import { getProducts, getProductsById } from "../controllers/productController.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route('/').get(getProducts);

// @desc Fetch a single product by Id
// @route GET /api/products/:id
// @access Public
router.route('/:id').get(getProductsById);

export default router;