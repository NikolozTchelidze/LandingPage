import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import "../App.css";
import vectorz from "../images/vectorz.png";
import vectorx from "../images/Vectorx.png";
import vectorxt from "../images/Vectorxt.png";
import vectort from "../images/Vectort.png";
import vectortx from "../images/Vectortx.png";
import vectord from "../images/Vectord.png";
import vectordt from "../images/Vectordt.png";
import vectordtx from "../images/Vectordx.png";
import vectordz from "../images/Vectordz.png";
import vectords from "../images/Vectords.png";
import vectordf from "../images/Vectordf.png";

const WhatWeDo = () => {
  return <div className="whatWeDoDiv">
    <h1 className="weDo">What we do</h1>
    <p className="p1">Collaboration models</p>
    <a href=""><p className="p2">Talk to us <KeyboardArrowRight sx={{ position: "absolute", left: "67px", top: "-2px" }}/></p></a>
    <div className="weDo1">
        <img src={vectorz} alt="vector1" className="vector1"/>
        <h1>Building digital products end to end</h1>
        <p>Digital products can’t be held, tasted, or touched, but everyone consumes them—from music to videos, ebooks to online courses, and more.</p>
    </div>
    <div className="weDo2">
        <img src={vectord} alt="icon" className="weDo2img" ></img>
        <img src={vectordt} alt="icon" className="weDo2imgz"></img>
        <img src={vectordtx} alt="icon" className="weDo2imgx"></img>
        <img src={vectordz} alt="icon" className="weDo2imgt"></img>
        <img src={vectords} alt="icon" className="weDo2imgs" ></img>
        <img src={vectordf} alt="icon" className="weDo2imgf"></img>
        <h1>Augmenting teams with top talents</h1>
        <p>You can hire developers and other talented individuals to fill the skill gaps in a project or business area</p>
    </div>
    <div className="weDo3">
        <img src={vectorx} alt="icon" className="weDo3img"></img>
        <img src={vectorxt} alt="icon" className="weDo3imgz"></img>
        <h1>Providing technical expertise</h1>
        <p>High quality example sentences with “provide technical expertise” in context from reliable sources - Ludwig is the linguistic search engine that helps..</p>
    </div>
    <div className="weDo4">
        <img src={vectort} alt="icon" className="weDo4img"></img>
        <img src={vectortx} alt="icon" className="weDo4imgz"></img>
        <h1>End-to-end development</h1>
        <p>Digital products can’t be held, tasted, or touched, but everyone consumes them—from music to videos, ebooks...</p>
    </div>
  </div>;
};

export default WhatWeDo;
