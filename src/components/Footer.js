import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import "../App.css";
import Path from "../images/path.png";


const Footer = () => {
  return (
    <div className="footer">
        <h1>Drop us a line</h1>
        <p>Let’s start completely new together</p>
        <a href="" className="a1"><p className="p2">Talk to us <KeyboardArrowRight sx={{position:"absolute",top:"-2px"}} /></p></a>
        <img src={Path} alt="pathicon"/>
        <p className="p3">Tbilisi</p>
        <p className="p4">marketing@arttteo.com</p>
        <p className="p5">+995 571 990 229</p>
        <p className="p6">Innovation Street # 7 </p>
        <p className="p7">Copyright © 2023 Arttteo</p>
        <a href="" className="p8">Facebook</a>
        <a href="" className="p9">Instagram</a>
        <a href="" className="p10">Linkedin</a>
    </div>
  );
};

export default Footer;
