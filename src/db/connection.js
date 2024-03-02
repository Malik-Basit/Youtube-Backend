import mongoose from "mongoose";
import { DB_Name } from "../constants/constant.js";

 async function connectDB() {
    try {
          const data =await mongoose.connect('mongodb+srv://MalikBasit:1234567890@cluster0.udto3xk.mongodb.net//myapp')
        console.log(data.connection.host,"connected"); 
    } catch (error) {
        console.log("Mongo db connection failed",error);
        process.exit(1);
    }
}
export default  connectDB;
