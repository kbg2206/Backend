import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()


const corsOption={
    origin: process.env.CORS_ORIGIN,
    Credential:true
}
app.use(cors(corsOption));

//data come from any form 
const jsonOption={
    limit:"16kb"
}
app.use(express.json(jsonOption));


//data come from url
const urlOption={
    extended:true,
    limit:"16kb"
}
app.use(express.urlencoded(urlOption));

// to store normal data like images and pdf and that is access by all the people  store it into  public folder
app.use(express.static("public"));


//to store or access cookies in the host system
app.use(cookieParser());

export default app;
