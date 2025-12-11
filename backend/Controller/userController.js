import userModel from '../Model/userSchema.js'
import Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator"

const createToken = (id, name) => {
    return Jwt.sign({ id: id, name: name }, process.env.JWT_SECRET)
}

const singIn = async (req, res) => {

    const { name, email, password } = req.body

    try {
        if (!validator.isEmail(email)) {
            return res.json({ success: false, massege: "enter valid email" })
        }

        const existUser = await userModel.findOne({ email: email })
        if (existUser) {
            return res.json({ success: false, massege: "user already exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword
        })

        await newUser.save()
        const token = createToken(newUser._id, name)
        console.log(token)

        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, massege: "some error" })
    }
}

const login = async (req, res) => {

    const { email, password } = req.body

    try {
        const existUser = await userModel.findOne({ email: email })

        if (!existUser) {
            return res.json({ success: false, massege: "Enter valid email" })
        }

        const checkPassword = await bcrypt.compare(password, existUser.password)
        if (!checkPassword) {
            return res.json({ success: false, massege: "Password is wrong" })
        }
        const token = createToken(existUser._id, existUser.name)
        console.log(token)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, massege: "some error" })
    }
}

export { singIn, login }