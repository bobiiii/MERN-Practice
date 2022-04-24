const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
require("./Database/conn");
app.use(express.json());
app.use(require("./Router/Auth"));
app.use(cookieParser())
const Port = process.env.PORT;

const LMiddleware = (req, res, next) => {
  console.warn("hello my friend");
  next();
};

app.get("/", (req, res) => {
  res.send("hello world this is from App.js file");
  
});
// app.get("/about", (req, res) => {
//   res.send("About Pagecls");
// });
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.get("/login", (req, res) => {
  res.send("Login Page");
});
app.listen(Port, () => {
  console.log(`server is listening at port ${Port}`);
});
