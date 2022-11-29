import React, { useState, useEffect } from "react";
import Logo from "./assets/img/logo/logo.png";
import {Collapse} from 'bootstrap';


export default function Navbar() {
  var [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        var myCollapse = document.getElementById('collapseTarget')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

  return (
    <nav class="navbar navbar-expand-lg">
    <div className="container mt-4 text-dark shadow-lg px-5 p-3 mx-auto mb-5 rounded">
      
    <div className="col-md-6">
      <a href="/Home" className="navbar-brand">
            <img src={Logo} alt="MsQuare Logo" />
      </a>
    </div>

    <button className="btn btn-white" onClick={() => setToggle(toggle => !toggle)}>
    <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse" id="collapseTarget">
        
        <div className="col-md-12">
          <div className="row">

            <div className="col-md-2 text-center">
              <a href="/Home" className="text-dark text-decoration-none">
                Home
              </a>
            </div>
          
            <div className="col-md-2 text-center">
              <a href="/About" className="text-dark text-decoration-none">
                About
              </a>
            </div>
           
            <div className="col-md-2 text-center">
              <a href="/Service" className="text-dark text-decoration-none">
                Services
              </a>
            </div>
           
            <div className="col-md-3 align-center text-center">
              <a href="/Contact" className="text-dark text-decoration-none">
                Contact
              </a>
            </div>
           
            <button
              href="#account"
              className="border-0 text-white rounded col-md-3"
              style={{ backgroundColor: "#E62B00" }}
            >
              Account
            </button>

          </div>  
        </div>

        </div>

      </div>
      <div className="row bg-black text-white">
        <p>
            Designed By <a href="https://t.me/uixnature">Uix Nature</a> &
            Developed By <a href="https://github.com/Reaclate">Reaclate</a>
        </p>
        </div>
      </nav>
  );
}
