import React from "react";
import {useState} from "react";
import github from "./assets/img/github.svg";
import behance from "./assets/img/behance.svg";
import linkedin from "./assets/img/linkedin.svg";
import userEvent from "@testing-library/user-event";

const Navbar = () => {

  const Logouthandler = (e) => {
    e.preventDefault();
    if(localStorage.getItem("LoginStatus") === "true")
    {
      localStorage.setItem("LoginStatus", false);
      window.location.href = "http://localhost:3000/Login";
    }
  };

  const Loginhandler = () => {
    if(localStorage.getItem("LoginStatus") === "false")
    {
      localStorage.setItem("LoginStatus", true);
      window.location.href = "http://localhost:3000/Home";
    }
  };

  return (
    <div className="Container-fluid bg-dark shadow-lg">
      <div className="row">
        <div className="col-md-8 col-12 text-white navbar-title">Windy Weather App</div>
        <div className="col-md-3 col-12">
          <div className="row right-icons">
            <div className="col-md-3 col-3 text-center">
              <a href="https://github.com/tinsaye-simeneh/Weather-app" target="_blank" rel="noreferrer">
              <img src={github} alt="github" className="img-fluid my-3" />
              </a>
            </div>

            <div className="col-md-3 col-3 text-center">
              <a href="https://www.behance.net/gallery/159186683/Simple-Weather-App" target="_blank" rel="noreferrer">
              <img
                src={behance}
                alt="behance"
                className="img-fluid my-3"
              />
              </a>
            </div>
            <div className="col-md-3 col-3">
              <a href="https://www.linkedin.com/in/tinsayesimeneh/" target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="linkedin"
                className="img-fluid my-3"
              />
              </a>
            </div>
            <div  className="col-md-3 col-3 mt-3">
            <button className="text-white" id="loginbtn" type="submit" onClick={Logouthandler}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
