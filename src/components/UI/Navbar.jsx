import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__Items">
        <Link to="/" className="Navbar__Item">
          Home
        </Link>
        <Link to="/About" className="Navbar__Item">
          About
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
