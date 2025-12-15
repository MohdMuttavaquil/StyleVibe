import express from 'express'
import "dotenv/config"
import dbConnaction from './Config/dbConfig.js'
import userRoute from './Routes/userRoute.js'
import productRoute from './Routes/productRoute.js'
import itemRoute from './Routes/itemRoute.js'

import cors from 'cors'

const app = express()
app.use(cors({
  allowedHeaders: ["Content-Type", "token"]
}))


app.use(express.json())
const PORT = 3000

// Db connaction 
dbConnaction()

//Piuter 
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)
app.use('/api/items', itemRoute)

app.get('/', (req, res)=>{
   res.json("Servier is running")
})

app.listen(PORT, ()=>{
    console.log(`servrer is running on ${PORT}`)
})