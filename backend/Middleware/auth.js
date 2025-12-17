import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    
    const { token } = req.headers
    if (!token) {
        return res.json({ success: false, message: "No authorised" })
    }

    try {
        if (!req.body) {
            req.body = {}
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {
            token: token_decode,
            userId: token_decode.id,
            userName: token_decode.name
        }

        console.log(req.user)

        next()
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Somr error" })
    }
}

export default authMiddleware