import express from 'express'
import authMiddleware from '../Middleware/auth.js'
import { onlinePay, order, verifyPay } from '../Controller/orderController.js'

const orderRoute = express.Router()

orderRoute.post('/', authMiddleware, order)
orderRoute.post('/onlinepay', onlinePay)
orderRoute.post('/verifyPay', verifyPay)

export default orderRoute