 import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./src/db/connection.js";
dotenv.config(); 
connectDB().then(() => {
    app.listen(  process.env.PORT || 9000,()=>{
        console.log(`listening on ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("DATABASE CONNECTION FAILED" , error)
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

