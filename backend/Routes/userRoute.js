import express from 'express'
import { login, singIn } from '../Controller/userController.js'
import { check } from '../Controller/iitemsController.js'
import authMiddleware from '../Middleware/auth.js'


const userRoute = express.Router()

userRoute.post('/login', login)
userRoute.post('/singin', singIn)
userRoute.get('/check', authMiddleware, check)

export default userRoute