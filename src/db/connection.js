import mongoose from "mongoose";
import { DB_Name } from "../constants/constant.js";

 async function connectDB() {
    try {
          const data =await mongoose.connect(`${process.env.DB_URL}/${DB_Name}`)
        console.log(data.connection.host,"connected"); 
    } catch (error) {
        console.log("Mongo db connection failed",error);
        process.exit(1);
    }
}
export default  connectDB;
