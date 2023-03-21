import React, { useState } from "react";
import logo from "../images/logo.png";
import "../App.css";
import { fontFamily, } from "@mui/system";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navbar = () => {

  return (
    <nav>
      <div className="logoDiv">
        <img
          src={logo}
          alt="Logo"
        />
        <p className="p1">Arttteo</p>
        <p className="p2">Software Development</p>
      </div>
      <div className="links">
        <a href="" className="navLinks link1">Partners</a>
        <a href="" className="navLinks link2">What we do</a>
        <a href="" className="navLinks link3" >Services</a>
        <a href="" className="navLinks link4">Clients</a>
        <a href="" className="navLinks link5">Insights</a>
      </div>
      <p className="linez1"></p>
      <p className="linez2"></p>
      <p className="linez3"></p>
      <div>
        <a href="" className="button1"><p>Talk to us <KeyboardArrowRightIcon className="arrowIcon"/></p></a>
      </div>
    </nav>
    
  );
};

export default Navbar;
