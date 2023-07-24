import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Waves from "./Waves";
import Footer from "./Footer";
import image from '../media/images/2.JPG';

function About() {
  return (
    <div className="justify-content-center">
      <Waves />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-light text-4xl">Message from Louis</h1>
      <br />
      <h2 className="text-light text-2xl">
        Thanks for visiting my site. I'm Louis Jul. K., an inspiring Full Stack Developer, Web App Designer, and Photographer.
      </h2>
      </div>
      <Footer />
    </div>
  );
}

export default About;
