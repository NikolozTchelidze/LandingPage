import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import Imagez from "../images/imagez.png";

const OtherInsights = () => {
  return (
    <div className="otherInsights">
      <h1 className="otherH1">What we do</h1>
      <p className="otherP1">Get the resources that matter</p>
      <p className="p2">
        Discover the latest news, tips and user research insights from Specify.
        You’ll learn about design tokens, design systems and Design APIs best
        practices.
      </p>
      <a href="" className="a1">
        <p className="p3">
          Talk to us{" "}
          <KeyboardArrowRight sx={{ position: "absolute", top: "-2px" }} />
        </p>
      </a>
      <div>
        <img src={Imagez} alt="image" />
        <p className="p4">
          Design processes as a decisive factor while choosing the best UX/UI
          Agency.
        </p>
        <a href="" className="a2">
          Read story{" "}
          <KeyboardArrowRight sx={{ position: "absolute", top: "-2px" }} />
        </a>
      </div>
      <div className="divPirveli">
        <h1>UI/UX Design</h1>
        <p>Design processes as a decisive factor while choosing the best UX/UI Agency.</p>
      </div>
      <div className="divMeore">
        <h1>Product Management</h1>
        <p>Market research for startups</p>
      </div>
      <div className="divMesame">
        <h1>User Experience</h1>
        <p>Choosing the right UX agency</p>
      </div>
      <div className="divMeotxe">
        <h1>UI/UX Design</h1>
        <p>Startups 7 UI/UX mistakes</p>
      </div>
    </div>
  );
};

export default OtherInsights;
