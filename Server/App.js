const mongoose = require("mongoose")
const express = require("express");
const app = express();


const DataBase="mongodb+srv://babersdn:react@cluster0.uv3lg.mongodb.net/MernDB?retryWrites=true&w=majority"; 
mongoose.connect(DataBase).then(()=>{
    console.log("connection cuccesful")
}).catch(err => console.log(err))


const LMiddleware = (req,res,next)=>{
    console.warn("hello my friend")
    next()
};

app.get("/", (req,res)=>{
    res.send("hello from babar")
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
app.listen(3000,()=>{
    console.log(`server is listening at port 3000`)
})