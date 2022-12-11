import React from "react";
import "../bootstrap.min.css";
import "../bootstrap.css";

import { BsFillCloudSunFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <div className="container-fluid flex justify-around">
          <span className="navbar-brand pl-8 " > Weather</span>

          <span className="navbar-brand">
            <BsFillCloudSunFill className="mb-2 text-4xl" />
          </span>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
