import express from 'express'
import uploder from '../Middleware/upload.js'
import authMiddleware from '../Middleware/auth.js'
import { addProduct, allProducts, deleteProduct, editProduct } from '../Controller/productController.js'

const productRoute = express.Router()

productRoute.post('/add', authMiddleware, uploder.array('images', 5), addProduct)
productRoute.get('/getproducts', authMiddleware, allProducts)
productRoute.post('/edit/product', authMiddleware, editProduct)
productRoute.post('/delet/product', authMiddleware, deleteProduct)

export default productRoute