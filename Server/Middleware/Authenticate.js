const jwt = require("jsonwebtoken")
const User = require("../Model/userSchema")

const Authenticate = async(req,res,next)=>{

    try {

    const token2 = req.cookies.jwtoken
    
        
     const verifyToken = jwt.verify(token2, process.env.SECRET_KET)
     const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token2})
    
    if (!rootUser) {throw new Error("user not found")}
    req.rootUser = rootUser,
    req.token2 = token2,
    req.userID = rootUser._id
    next()

} catch (error) {
    console.log(` err from authenticate catch  ${error}`)
    res.status(401).send("unauthorized no token provided")

    
}


}
module.exports = Authenticate;