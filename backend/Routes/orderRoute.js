import express from 'express'
import authMiddleware from '../Middleware/auth.js'
import { order } from '../Controller/orderController.js'

const orderRoute = express.Router()

orderRoute.post('/', authMiddleware, order)

export default orderRoute