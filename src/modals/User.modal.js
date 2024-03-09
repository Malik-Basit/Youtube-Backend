import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"; 
import { Jwt } from "jsonwebtoken";
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,    
            unique: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        age: {
            type: Number,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String,
            required: true,
        },
        coverimage: {
            type: String,
            required: true,
        },
        wacthHistory:[
            {
            type:Schema.Types.ObjectId,
            ref:"video"
            }
        ],
        refreshtoken:{
            type : String,
            required: true,
        }
    },
    {
        timestamps:true
    }
    )
    userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 10); // password hashing with 10 rounds
        next();
    })

    userSchema.methods.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    }

    userSchema.methods.generateToken = async function () {
        const token = Jwt.sign({
            _id: this._id,
            name: this.name,
            email: this.email,
            fullname: this.fullname,
        }, process.env.ACCESS_TOKEN_SECRET ,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        });
        return token;
    }

    userSchema.methods.generateRefreshToken = async function () {
        const token = Jwt.sign({
            _id: this._id,
            name: this.name,
        }, process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        });
        return token;
    }


 export const User = mongoose.model("User", userSchema);