const express = require("express");
const User = require("../Model/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authenticate = require("../Middleware/Authenticate")

//set path for homepage
router.get("/", (req, res) => {
  res.send("helloo this is from auth js file");
});

//user registration with Async func

router.post("/register", async (req, res) => {
  //req.body getting values filled by user in frontend
  //destructuring req.body
  const { name, phone, email, password, cpassword } = req.body;
  //condition if user didnt filled any field
  if (!name || !phone || !email || !password || !cpassword) {
    return res.status(400).json({ error: "pl fill alll required fields" });
  }
  try {
    //check if typed email or phone already exist in DB
    const userextemail = await User.findOne({ email: email });
    const userextphone = await User.findOne({ phone: phone });
    if (userextemail || userextphone) {
      return res.status(400).json({ error: "user already exists" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "password didnt match" });
    } else {
      //if user did it properly then add his details to DB

      const user = new User({ name, email, phone, password, cpassword });

      await user.save();

      res.status(200).json({ message: "user registered succesfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  //get email or pass that user typed in login page
  const { email, password } = req.body;
  //if email or if pass fielf is blank then
  if (!email || !password) {
    return res.status(400).json({ error: "pl fill req fields" });
  }

  try {
    //check in DB users email exists in DB
    //checkEmail holds all details of user
    const checkEmail = await User.findOne({ email: email });
    //if typed mail exists then
    if (checkEmail) {
      //decode hashed pass from DB and compare it with
      //typed pass and store it to valid pass Var
      const validPassword = await bcrypt.compare(password, checkEmail.password);
      //creating token for cookie
      const token = await checkEmail.generateAuthToken();
      res.cookie("jwtokenCookie", token, {
        expires: new Date(Date.now() + 12000000),
        httpOnly: true,
      });
      //after validPassword is true then
      if (validPassword) {
        res.json({ message: "user logged in" });
      } else {
        res.json({ error: "password didnt match" });
      }
    } else {
      res.status(400).json({ error: "invalid credientials" });
    }
  } catch (err) {
    console.log(` from catch ${err}`);
  }
});


router.get("/about",Authenticate, (req, res) => {
  res.send(req.rootUser);
});

// storing or checking data using promises

// router.post("/register", (req, res) => {
//     const { name, email, phone, password, cpassword } = req.body;
//     if (!name || !email || !phone || !password || !cpassword) {
//         return (res.json({ error: "pl fill required field" }))
//     }
//     User.findOne({ email: email })
//     .then((userExist) => {
//         if (userExist) {
//             return res.json({ error: "user already exists" })
//         }
//         const user = new User({ name, email, phone, password, cpassword })
//         user.save().then(() => {
//             res.json({ message: "user added succesfully" })
//         }).catch((err)=> res.json({error:"unable to add user"}) )

//     }).catch((err) => {console.log(err)})

// })

module.exports = router;
