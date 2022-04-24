import React,{useEffect,useState} from "react";
import "./Css/Contact.css";

const Contact = () => {
  const [userData,setUserdata] = useState({});
  const contactAuth = async () => {
    try {
      const resp = await fetch("/contactData",
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
        })
      const data = await resp.json()
        setUserdata(data);

      if (!resp.status === 200) {
        const error = new Error(resp.error)
        console(` err from if ${error}`)
      }
    } catch (error) {
      console.log(` error from aboututh catch  ${error}`)

    }

  }

  useEffect(() => {
    contactAuth()
  }, [])
  return (
    <>
      <div className="main">
        <div className="details-container">
          <div className="sub-dtl-container">
            <h4>Phone</h4>
  <h5>{userData.phone}</h5>
          </div>
          <div className="sub-dtl-container">
            <h4>Email</h4>
  <h5>{userData.email}</h5>
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
              <input type="text" placeholder="Your Name" value={userData.name} required />
              <input type="text" placeholder="Email" value={userData.email} required />
              <input type="number" placeholder="Phone" value={userData.phone} required />
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
