import React from "react";
import "../App.css";
import removebg from "../images/removebg.png";
import clientOne from "../images/client1.png";
import clientTwo from "../images/client2.png";
import clientThree from "../images/client3.png";
import clientFour from "../images/client4.png";

const ClientsAboutUs = () => {
  return (
    <div className="clients" >
      <h1 className="clientsAbout">Clients about us </h1>
      <p className="cp1">Clutch Testimonials</p>
      <p className="p2 cp2">
        Digital products can’t be held, tasted, or touched, but everyone
        consumes them—from music to videos, ebooks to online courses, and more.
      </p>
      <img src={removebg} alt="removebg" className="removebg" />
      <div className="client1">
        <img src={clientOne} alt="clientOneImg" />
        <h1 className="clientName1">Patrick Chandroke</h1>
        <p>Technical Manager, Neste</p>
        <p className="p2">
          They were innovative and modern — they’re an overall good and
          experienced team. Project management was fully comfortable for us;
          they were flexible, timely, had an agile approach, and were
          result-oriented
        </p>
      </div>
      <div className="client2">
        <img src={clientTwo} alt="clientTwoImg" />
        <h1>Pluto Nash</h1>
        <p>QA Engineer, Microsoft</p>
        <p className="p2">
          Arttteos’ creativity and design skills are impressive. They have got a
          great ability of ideating solutions to UX problems.
        </p>
      </div>
      <div className="client3">
        <img src={clientThree} alt="clientThreeImg" />
        <h1>Daniel Grunstein</h1>
        <p>CEO, Crowded</p>
        <p className="p2">
          The designs they come up with are very sleek, highly functional, and
          balanced — the UI of the app is aesthetically-pleasing, but it still
          focuses on creating a good customer experience.
        </p>
      </div>
      <div className="client4">
        <img src={clientFour} alt="clientFourImg" />
        <h1>Nick Lilovich</h1>
        <p>The Collaboratory President an CEO</p>
        <p className="p2">
          Digital products can’t be held, tasted, or touched, but everyone
          consumes them—from music to videos, ebooks to online courses, and
          more.
        </p>
      </div>
    </div>
  );
};

export default ClientsAboutUs;
