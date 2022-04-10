const express = require("express");
const User = require("../Model/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
router.get("/", (req, res) => {
    res.send("helloo this is from auth js file")

});

//user registration with Async func

router.post("/register", async (req, res) => {
    const { name, phone, email, password, cpassword } = req.body;
    if (!name || !phone || !email || !password || !cpassword) {
        return res.status(400).json({ error: "pl fill alll required fields" })
    }
    try {
        const userextemail = await User.findOne({ email: email });
        const userextphone = await User.findOne({ phone: phone });
        if (userextemail || userextphone) {
            return res.status(400).json({ error: "user already exists" })
        } else if (password != cpassword) {
            return res.status(400).json({ error: "password didnt match" })
        } else {

            const user = new User({ name, email, phone, password, cpassword })

            await user.save()

            res.status(200).json({ message: "user registered succesfully" })

        }


    } catch (err) {
        console.log(err)
    }


})

router.post("/login", async (req, res) => {
    
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "pl fill req fields" })
    } 
    try {   const checkEmail = await User.findOne({ email: email })

        if (checkEmail) {
            const validPassword = await bcrypt.compare(password, checkEmail.password)
            if (validPassword) {
                res.json({ message: "you are logged in" })
                console.log(validPassword)
                   const token = await checkEmail.generateAuthToken()
                   

            } else {
                res.json({ error: "password didnt match" })

            }
        }
        else {
            res.status(400).json({ error: "invalid credientials" })
        }
    }
    catch (err) {
        console.log(` from catch ${err}`)
    }


})











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