import mongoose from "mongoose";
import { NODE_ENV,DB_URI } from "../config/env.js";

if(!DB_URI){
    throw new Error("Please provide MONGODB_URI enviournment variable inside .env<development/production>.local");
}

const connectToDatabase = async ()=>{
    try{
        mongoose.connect(DB_URI);
        console.log(`Connect to Database in ${NODE_ENV} mode`);
    }catch(error){
      console.log("Error in connectiong to database",error);
      process.exit(1);
    }
}

export default connectToDatabase