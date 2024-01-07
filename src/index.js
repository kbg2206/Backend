
//require('dotenv').config({path:'./env'})
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js"
dotenv.config({
    path: './.env'
})

connectDB()
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