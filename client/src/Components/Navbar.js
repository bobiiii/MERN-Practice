import React from 'react'
import Logo from "../Images/logo.jpg"
import "bootstrap/dist/css/bootstrap.css";
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src={Logo} className="navbar-brand" alt="logo" width="100" height="80" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home  </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/contact">Contact   </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/aboutus">About Me   </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/login">SignIn </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
        
        </>
    )
}

export default Navbar
