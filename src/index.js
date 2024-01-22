
//require('dotenv').config({path:'./env'})
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import app from "./app.js";

// to load environment variable 
dotenv.config({  
    path: './.env'
})

connectDB()

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
.then(() =>{
    app.on("error",(error)=>{
        console.log("ERROR: ",error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` server is running at port : ${process.env.PORT}`);

    })
})
.catch((error) =>{
    console.log("Mongo DB connection failed !!! ",error);
})

















































/*
//this is how we connect to data base 
const app=express()

( async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERROR: ",error)
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on the port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error
    }
})()
*/