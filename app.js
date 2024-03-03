import express from "express";
import  cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import { size } from "./src/constants/constant";

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
));
app.use(express.json( {limit:size} ));
app.use(express.urlencoded({limit:size,extended:true}));
app.use(cookieParser());


export {app}