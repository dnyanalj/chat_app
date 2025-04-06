// const express = require('express')// method-1
import express from "express";
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js";
import cors from "cors";
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
dotenv.config({});
const corsOption={
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption)); 
const PORT = process.env.PORT || 5000;

// routes

app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});