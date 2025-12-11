import express from 'express'
import { login, singIn } from '../Controller/userController.js'


const userRoute = express.Router()

userRoute.post('/login', login)
userRoute.post('/singin', singIn)

export default userRoute