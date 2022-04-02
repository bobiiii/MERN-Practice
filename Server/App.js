const express = require("express");
const app = express();
const port = 3000;

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
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})