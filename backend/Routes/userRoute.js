import express from 'express'
import { addInCart, login, removeInCart, singIn } from '../Controller/userController.js'
import authMiddleware from '../Middleware/auth.js'

const userRoute = express.Router()

userRoute.post('/login', login)
userRoute.post('/singin', singIn)
userRoute.post('/addincart', authMiddleware, addInCart)
userRoute.post('/removeincart', authMiddleware, removeInCart)

export default userRoute