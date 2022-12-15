import React from "react";
import github from "./assets/img/github.svg";
import behance from "./assets/img/behance.svg";
import linkedin from "./assets/img/linkedin.svg";

const Navbar = () => {
  return (
    <div className="Container-fluid bg-dark">
      <div className="row ps-5">
        <div className="col-md-8 ms-3 text-white pt-3 ps-5">Windy Weather App</div>
        <div className="col-md-3 ms-5">
          <div className="row ps-5">
            <div className="col-md-3 text-center">
              <img src={github} alt="github" className="img-fluid w-50 my-3" />
            </div>
            <div className="col-md-3 text-center">
              <img
                src={behance}
                alt="behance"
                className="img-fluid w-50 my-3"
              />
            </div>
            <div className="col-md-3">
              <img
                src={linkedin}
                alt="linkedin"
                className="img-fluid w-50 my-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
