import express from "express";
 import dotenv from "dotenv";
const app = express();
import connectDB from "./src/db/connection.js";
    dotenv.config(); 
connectDB() 
app.listen(  process.env.PORT || 9000 ,()=>{
console.log(`listening on ${process.env.PORT}`)
})

