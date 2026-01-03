import express from 'express'
import authMiddleware from '../Middleware/auth.js'
import { onlinePay, order, verifyPay } from '../Controller/orderController.js'
import { admainOrder, cancelOrder, confirmOrder, deliveredOrder, userOrder } from '../Controller/orderInfoController.js'

const orderRoute = express.Router()

// Order items and payment route
orderRoute.post('/', authMiddleware, order)
orderRoute.post('/onlinepay', onlinePay)
orderRoute.post('/verifyPay', verifyPay)

// Get order info route
orderRoute.get('/userorder', authMiddleware, userOrder)
orderRoute.get('/admainorder', authMiddleware, admainOrder)
orderRoute.post('/confirm', confirmOrder)
orderRoute.post('/delivered', deliveredOrder)
orderRoute.post('/cancel', cancelOrder)


export default orderRoute