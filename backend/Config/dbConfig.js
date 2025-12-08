import mysql from 'mysql2/promise'
import fs from 'fs'

const dbConnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
      ssl: {
    ca: fs.readFileSync("./Config/certs/ca.pem")
  }
}).then(()=>{console.log("db conected")})

export default dbConnection