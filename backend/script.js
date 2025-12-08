import express from 'express'
import "dotenv/config"
import cors from 'cors'
import dbConnection from './Config/dbConfig.js'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

// database connaction
dbConnection

app.get('/', (req, res)=>{
    res.json("Servier is running")
})

app.listen(PORT, ()=>{
    console.log(`servrer is running on ${PORT}`)
})