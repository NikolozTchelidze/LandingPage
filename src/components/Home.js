import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import Navbar from "./Navbar";
import Image from "../images/image.png";
import EntrepreneurIcon from "../images/Entrepreneur.png";
import VisaIcon from "../images/Visa.png";
import ForbesIcon from "../images/Forbes.png";
import RippleIcon from "../images/Ripple.png";
import McIcon from "../images/MC.png";
import MicrosoftIcon from "../images/Microsoft.png"
import UberIcon from "../images/Uber.png";
import MarketerIcon from "../images/Marketer.png";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="primary-text-container">
        <h1>Introducing Design Data Platform</h1>
        <p className="p1">Distribute your brand from design to code</p>
        <p className="p2">
          Software Develop helps you unify your brand identity by collecting,
          storing and distributing design tokens and assets — automatically.
        </p>
        <a href="" className="button2">
          <p>
            Talk to us{" "}
            <KeyboardArrowRightIcon
              sx={{ position: "absolute", left: "67px", top: "-2px" }}
            />
          </p>
        </a>
        <div>
          <a href="" >
            <p className="p3">
              Get free e-book{" "}
              <KeyboardArrowRightIcon
                sx={{ position: "absolute", top: "-2px" }}
              />
            </p>
          </a>
        </div>
        <div className="imgDivz">
          <img src={Image} alt="image" ></img>
        </div>
      </div>
      <div className="Partners-icons" >
        <img src={EntrepreneurIcon} alt="EntrepreneurIcon" className="icon1"></img>
        <img src={VisaIcon} alt="visaicon" className="icon2"></img>
        <img src={ForbesIcon} alt="forbesicon" className="icon3"></img>
        <img src={RippleIcon} alt="rippleicon" className="icon4"></img>
        <img src={McIcon} alt="mcicon" className="icon5"></img>
        <img src={MicrosoftIcon} alt="microsofticon" className="icon6"></img>
        <img src={UberIcon} alt="ubericon" className="icon7" ></img>
        <img src={MarketerIcon} alt="marketericon" className="icon8"></img>
      </div>
    </div>
  );
};

export default Home;
