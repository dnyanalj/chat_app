import express from "express";
const app=express();
app.use(express.json()); 

import dotenv from "dotenv"; 
dotenv.config({});
const PORT = process.env.PORT || 5000;

import connectDB from "./config/database.js";

import userRoute from "./routes/userRoutes.js";

// routes
app.use("/api/v1/user",userRoute); 

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});