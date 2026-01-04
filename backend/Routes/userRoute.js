import express from 'express'
import { addInCart, login, removeInCart, singIn, userCart, userInfo } from '../Controller/userController.js'
import authMiddleware from '../Middleware/auth.js'

const userRoute = express.Router()

userRoute.post('/login', login)
userRoute.post('/singin', singIn)
userRoute.get('/info', authMiddleware, userInfo)

userRoute.post('/addincart', authMiddleware, addInCart)
userRoute.post('/removeincart', authMiddleware, removeInCart)
userRoute.get('/cart', authMiddleware, userCart)

export default userRoute