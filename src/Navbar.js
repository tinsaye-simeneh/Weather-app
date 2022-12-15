import React from "react";
import github from "./assets/img/github.svg";
import behance from "./assets/img/behance.svg";
import linkedin from "./assets/img/linkedin.svg";

const Navbar = () => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-4">Windy Weather App</div>
        <div className="col-md-4">
            <img src={github} alt="github" />
            <img src={behance} alt="github" />
            <img src={linkedin} alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
