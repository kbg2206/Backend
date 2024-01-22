import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


//conecting database 
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n Monogo DB connected !! DB Host : ${connectionInstance.connection.host}`);
        
        

    } catch (error) {
        console.error("Mongodb connection ERROR: ",error);
        process.exit(1);
    }
}

export default connectDB;