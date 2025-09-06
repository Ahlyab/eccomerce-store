import express from 'express';
import * as orderController from '../controllers/orderController.js';
import { authenticateToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

// Protected routes
router.post('/', authenticateToken, orderController.createOrder);
router.get('/', authenticateToken, orderController.getUserOrders);
router.get('/:id', authenticateToken, orderController.getOrderById);

// Seller routes
router.get('/seller/orders', 
  authenticateToken, 
  requireRole(['seller']), 
  orderController.getSellerOrders
);

export default router;
