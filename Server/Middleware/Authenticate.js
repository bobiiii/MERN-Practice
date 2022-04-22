const jwt = require("jsonwebtoken")
const User = require("../Model/userSchema")
const Authenticate = async(req,res,next)=>{
try {
    const token = req.cookies.jwtokenCookie;
    const verifyToken = jwt.verify(token, process.env.SECRET_KET)
    const rootUser = User.findOne({_id:verifyToken._id, "tokens.token":token})
    if (!rootUser) {throw new Error("user not found")}
    req.rootUser = rootUser,
    req.token = token,
    req.userID = rootUser._id
    next()

} catch (error) {
    console.log(error)
    res.status(401).send("unauthorized no token provided")
}


}
module.exports = Authenticate;