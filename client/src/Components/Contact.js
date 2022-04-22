import React from "react";
import "./Css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="details-container">
          <div className="sub-dtl-container">
            <h4>Phone</h4>
            <h5>03060125220</h5>
          </div>
          <div className="sub-dtl-container">
            <h4>Email</h4>
            <h5>Babersdn@gmail.com</h5>
          </div>
          <div className="sub-dtl-container">
            <h4>Address</h4>
            <h5>Sector 4-E, Baldia Town Karachi</h5>
          </div>
        </div>
        <div className="messages-form">
          <h2>Get In Touch</h2>
          <form className="contact-form">
            <div className="contact-form-3">
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
            </div>
            <div className="CMessageBox">
            <textarea type="text" placeholder=" Type Your Message Here"  required ></textarea>
            
            <input type="submit"/>  
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
