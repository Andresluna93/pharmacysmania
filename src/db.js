import mongoose from "mongoose";

const DB_URI = process.env.DB_URI

export const connectDB = async ()=>{
    try{
        await mongoose.connect(DB_URI)
        console.log("db is conected")
    }catch(error){
        console.log(error)
    }
}