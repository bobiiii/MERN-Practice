import React,{useEffect,useState} from "react";
import "./Css/Contact.css";

const Contact = () => {
  const [userData,setUserdata] = useState({
    name:"", email:"", phone:"", msg:"a"
  });
  
  const handleinput=(e)=>{
    const name = e.target.name
    const value = e.target.value
    setUserdata({...userData,[name]:value})
    
  }

  const PostData= async(e)=>{
    e.preventDefault();
    const {name,email,phone,msg} = userData;
    const res = await fetch("/contact",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name,email,phone,msg
      })

    }
    )
    const data = await res.json()
    if (!data) {
      console.log("message not sent")
      
    } else {
      alert("message sent succesfully")
      console.log("aletr is here")
      setUserdata({...userData, msg:""})
      
    }

  }
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
        setUserdata({...userData, name:data.name, email:data.email, phone:data.phone});

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
          <form method="POST" className="contact-form">
            <div className="contact-form-3">
              <input type="text" placeholder="Your Name"  value={userData.name}
              name="name" onChange={handleinput} required />
              <input type="text" placeholder="Email"  value={userData.email}
             name="email"  onChange={handleinput} required />
              <input type="number" placeholder="Phone"  value={userData.phone}
             name="phone"  onChange={handleinput} required />
            </div>
            <div className="CMessageBox">
            <textarea type="text" placeholder=" Type Your Message Here" value={userData.msg}
           name="msg"  onChange={handleinput}
            required ></textarea>
            
            <input onClick={PostData} type="submit"/>  
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
