const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//userschema means what value will be sent to DB
//only this data typed by user will send to DB
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  messages: [{
      name:{
          type: String,
         required : true
      },
      email:{
        type: String,
       required : true
    },
    phone:{
        type: String,
       required : true
    },
    msg:{
        type: String,
       required : true
    }
  }],
  tokens: [
    {
      token: {
        required: true,
        type: String,
      },
    },
  ],
});
//hasing the password b4 sending to DB
//used normal func bcz cant use "this" in arrow func
//userSchema.pre means do it b4 "save" to DB
//this is middle ware whgich will run b4 saving data
userSchema.pre("save", async function (next) {
  //
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
// adding cookie token to the DB
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KET);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
//  storing msg to DB
userSchema.methods.addMessage = async function(name,email,phone,msg){
    try {
        this.messages = this.messages.concat({name,email,phone,msg})
        await this.save();
        return this.messages
    } catch (error) {
        console.log(error)
    }

}

// //code for bcrypt
// userSchema.pre("save",async function(next){
//     if(this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12)
//         this.cpassword = await bcrypt.hash(this.cpassword, 12)
//     };
//     next();

// } )

const User = mongoose.model("USER", userSchema);

module.exports = User;
