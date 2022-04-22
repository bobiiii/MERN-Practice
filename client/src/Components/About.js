import React, { useEffect } from "react";
import "./Css/About.css";
import logo from "../Images/logo.jpg";
const About = () => {

  
  useEffect(() => {
    document.getElementById("def").click()
  }, [])
  function opentab(e, x) {
    e.preventDefault()


    let i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("sub-about");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");

    }
    document.getElementById(x).style.display = "grid";
    e.currentTarget.className += " active";
  }

  return (
    <>
      {console.log("component is rendering ")}

      <div className="about-container">
        <form method="GET">
          <div className="about-main">

            <div className="gridrow1 gridcol1">
              <img src={logo} alt="pic" />
            </div>
            <div className="gridrow1 gridcol2">
              <div className="mju">
                <h2>Babar Khan</h2>
                <h4>WEB DEVELOPER</h4>
                <h5>Rankings 9/10</h5>
              </div>
            </div>
            <div className="gridrow1  col3btn">
              <button>Edit Profile</button>
            </div>
            <div className="det-links">
              <h3>Contact Links</h3>
              <div className="det-links-sub">
                <a href="fb.com">Youtube</a>
                <a href="fb.com">LinkedIn</a>
                <a href="fb.com">Instagram</a>
                <a href="fb.com">facebook</a>
                <a href="fb.com">twitter</a>
                <a href="fb.com">Whatsapp</a>
              </div>
            </div>
            <div className="toggle-lnks">
              <button
                id="def"
                className="tablinks"
                onClick={(e) => opentab(e, "about")}
              >
                About
            </button>
              <button
                className="tablinks"
                onClick={(e) => {
                  opentab(e, "timeline");
                }}
              >
                Timeline
            </button>
            </div>
            <div id="about" className="sub-about ">
              <div className="tab-det">
                <section>
                  <h3>User ID</h3>
                  <h3>Name</h3>
                  <h3>Email</h3>
                  <h3>Phone</h3>
                  <h3>Profession</h3>
                </section>
                <section>
                  <h3>123456</h3>
                  <h3>Babar Khan</h3>
                  <h3>Babersdn@gmail.com</h3>
                  <h3>03060125220</h3>
                  <h3>Web Developer</h3>
                </section>
              </div>
            </div>
            <div id="timeline" className="sub-about">
              <div className="tab-det">
                <section>
                  <h3>Skills</h3>
                  <h3>Avg Price</h3>
                  <h3>Rating</h3>
                  <h3>Joined</h3>
                </section>
                <section>
                  <h3>MERN Stack</h3>
                  <h3>10$/Hr</h3>
                  <h3>8/10</h3>
                  <h3>2 Years Ago</h3>
                </section>
              </div>
            </div>

          </div>

        </form>
      </div>

    </>
  );
};

export default About;
