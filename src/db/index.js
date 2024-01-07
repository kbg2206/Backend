import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n Monogo DB connected !! DB Host : ${connectionInstance.connection.host}`);
        /*
        app.on("Error",(error)=>{
            console.log("ERROR: ",error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on the port ${process.env.PORT}`)
        })
        */

    } catch (error) {
        console.error("Mongodb connection ERROR: ",error);
        process.exit(1);
    }
}

export default connectDB;