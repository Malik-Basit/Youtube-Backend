import mongoose from "mongoose";
import 'dotenv/config'
import { DB_Name } from "../constants/constant";

 async function connectDB() {
    try {
          const data = await  mongoose.connect(`${process.env.DB_URL}/${DB_Name}`);
    } catch (error) {
        
    }
}
export default  connectDB;
