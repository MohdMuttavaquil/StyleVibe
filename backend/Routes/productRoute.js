import express from 'express'
import uploder from '../Middleware/upload.js'
import authMiddleware from '../Middleware/auth.js'
import { addProduct } from '../Controller/productController.js'

const productRoute = express.Router()

productRoute.post('/add', authMiddleware, uploder.array('images', 5), addProduct)

export default productRoute