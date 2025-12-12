import express from 'express'
import "dotenv/config"
import cors from 'cors'
import dbConnaction from './Config/dbConfig.js'
import userRoute from './Routes/userRoute.js'
import productRoute from './Routes/productRoute.js'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

// Db connaction 
dbConnaction()

//Piuter 
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)

app.get('/', (req, res)=>{
   res.json("Servier is running")
})

app.listen(PORT, ()=>{
    console.log(`servrer is running on ${PORT}`)
})