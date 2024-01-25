import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.connect.js"

dotenv.config({
    path:'./.env'
})
const port = process.env.PORT || 8000

const app = express()

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is listing on ${port}`);
    })
})
.catch((err)=>{
    throw err;
})