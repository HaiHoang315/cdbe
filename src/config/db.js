import mongoose from "mongoose";

export const connectDB = async (uri) =>{
    try{
        console.log("Connecting to database with URI:", uri);
        await mongoose.connect(uri);
    }catch(error){
        console.log(error);
    }
}