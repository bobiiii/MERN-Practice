import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Signin from "../Images/signin.png"

const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState();

  const loginuser = async (e)=>{
    e.preventDefault();
    const res = await fetch("/login",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"},
      body: JSON.stringify({
        email,
        password
      })
    })
  
    const data = res.json()
    if (res.status === 400 || !data ) {
      window.alert("invalid credentials")
  
      
    } else {
      window.alert("login successfull")
      navigate("/")
    }
  }
  
  return (
    <div className="container1">
      <div className="wrapper1">
        <form method="POST" className="form">
          <h1>Login</h1>
          <label htmlFor="email"> Email</label>
          <br />
          <input type="text" id="email" 
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Passowrd</label>
          <br />
          <input type="password" id="password" 
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           />
          <br />
          <input onClick={loginuser} type="submit"/>
        </form>
        <div className="form-sideB">
            <img src={Signin} alt="login pic"/>
            <NavLink to="/register">Create New Account</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Login;
