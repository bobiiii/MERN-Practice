import React from "react";
import "./Css/Signup.css";
import Signin from "../Images/signin.png"
import { NavLink, useNavigate } from "react-router-dom";
import {useState} from "react"

const Signup = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",email:"",phone:"",password:"",cpassword:"",
  })
  let name,value
  const handleInput = (e)=>{
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]:value})
  }
  const postData = async (e)=>{
    e.preventDefault();
    const {name,email,phone,password,cpassword} = user;
    const res = await fetch("/register",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,email,phone,password,cpassword
      })

    })
    const data = await res.json()
    if (res.status === 400 || !data) {
      window.alert("invalid data")
      console.log("invalid regis")
      
    } else{
      window.alert("data success")
      console.log("dtat suxcces")
      
    }
    navigate("/login")
  }

  return (
    <div className="container1">
      <div className="wrapper1">
        
        <form method="POST" className="form">
        <h1>Sign Up</h1>
          <label htmlFor="name">Your Name</label>
          <br />
          <input type="text" id="name" name="name" value={user.name} 
          onChange={handleInput}
          required />
          <br />
          <label htmlFor="email"> Email</label>
          <br />
          <input type="text" id="email" name="email" value={user.email} 
          onChange={handleInput}
          required/>
          <br />
          <label htmlFor="phone">Phone Number</label>
          <br />
          <input type="number" id="phone" name="phone" value={user.phone} 
          onChange={handleInput}
          required />
          <br />
          <label htmlFor="password">Passowrd</label>
          <br />
          <input type="password" id="password" name="password"value={user.password} 
          onChange={handleInput}
          required />
          <br />
          <label htmlFor="cpassword">Confirm Passowrd</label>
          <br />
          <input type="password" id="cpassword" name="cpassword" value={user.cpassword} 
          onChange={handleInput}
          required />
          <br/>
          <input type="submit" name="submit" value="register" onClick={postData} id="submit"/>
        </form>
        <div className="form-sideB">
            <img src={Signin} alt="signin-image"/>
            <br/>
            <NavLink className="fsblink" to="/login">Already A Member</NavLink>
        </div>
        </div>
      </div>
    
  );
};

export default Signup;
