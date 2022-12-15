import React from "react";
import github from "./assets/img/github.svg";
import behance from "./assets/img/behance.svg";
import linkedin from "./assets/img/linkedin.svg";

const Navbar = () => {
  return (
    <div className="Container-fluid bg-dark">
      <div className="row">
        <div className="col-md-8 col-12 text-white navbar-title">Windy Weather App</div>
        <div className="col-md-3 col-12">
          <div className="row right-icons">
            <div className="col-md-3 col-3 text-center">
              <img src={github} alt="github" className="img-fluid my-3" />
            </div>
            <div className="col-md-3 col-3 text-center">
              <img
                src={behance}
                alt="behance"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-md-3 col-3">
              <img
                src={linkedin}
                alt="linkedin"
                className="img-fluid my-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
