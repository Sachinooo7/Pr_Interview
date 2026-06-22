import mongoose from 'mongoose'
import dotenv from 'dotenv'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    credits:{
        type:Number,
        default:100
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default User