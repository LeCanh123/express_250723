import dotenv from 'dotenv'
dotenv.config();
import express  from "express";
const server =express();

server.listen(process.env.PORT,()=>{
console.log("server dang chay tren port ",`${process.env.SERVER_HOST}:${process.env.PORT}`);
})