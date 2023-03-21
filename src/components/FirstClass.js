import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import "../App.css";
import Image from "../images/image.png"

const FirstClass = () => {
  return (
    <>
      <div className="firstClass">
        <h1>First-Class Features</h1>
        <p className="fp1">Key steps about how to use it</p>
        <p className="fp2">
          Digital products can’t be held, tasted, or touched, but everyone
          consumes them—from music to videos, ebooks to online courses, and
          more.
        </p>
        <div className="hardwareDiv">
          <h1>Hardware</h1>
          <p>
            Digital products can’t be held, tasted, or touched, but everyone...
          </p>
          <a href="">
            Learn more{" "}
            <KeyboardArrowRight sx={{ position: "absolute", top: "-2px" }} />
          </a>
          <img src={Image}></img>
        </div>
        <div className="hardwareDiv2">
          <h1>Hardware</h1>
          <p>
            Digital products can’t be held, tasted, or touched, but everyone...
          </p>
          <a href="">
            Learn more{" "}
            <KeyboardArrowRight sx={{ position: "absolute", top: "-2px" }} />
          </a>
          <img src={Image}></img>
        </div>
        <div className="featuresDiv">
          <h1>Features</h1>
          <p>
            Digital products can’t be held, tasted, or touched, but everyone
            consumes them—from music to videos, ebooks to online courses, and
            more.
          </p>
          <a href=""><p className="p1">Learn more <KeyboardArrowRight sx={{position:"absolute",top:"-2px"}} /></p></a>
          <img src={Image}></img>
        </div>
      </div>
    </>
  );
};

export default FirstClass;
