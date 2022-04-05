
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config({path:"./config.env"})
require("./Database/conn")
app.use(express.json())
app.use(require("./Router/Auth"))

const Port = process.env.PORT

const LMiddleware = (req,res,next)=>{
    console.warn("hello my friend")
    next()
};

app.get("/", (req,res)=>{
    res.send("hello world this is from App.js file")
})
app.get("/about", (req,res)=>{
    res.send("About Pagecls")
})
app.get("/contact",LMiddleware, (req,res)=>{
    res.send("Contact Page")
    
})
app.get("/login", (req,res)=>{
    res.send("Login Page")
})
app.get("/register", (req,res)=>{
    res.send("this is register rpage")
})
app.listen(Port,()=>{
    console.log(`server is listening at port ${Port}`)
})