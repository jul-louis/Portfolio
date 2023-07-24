import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VideoBackground from "./VideoBackground";
import HorizontalTextLoop from "./TextLoop";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="position-relative">
      <VideoBackground />
      <HorizontalTextLoop />
      <div className="text-white bg-dark p-6 position-fixed top-50 start-50 translate-middle" style={{ mixBlendMode: "overlay"}}>        
      <h1 className="font-rm text-5xl pb-3" style={{ color: 'transparent' }}>Kraken Louis Jul.</h1>
        {/* <h2 className="font-rm">Next Stop: Toronto, ON</h2>
        <div className="font-rm">
          <h2 style={{ display: "inline" }}>live a </h2>
          <h2 onClick={videoTrigger} className="video-trigger cli-item">
            life
          </h2>
        </div> */}
     </div>
     <Link to="/portfolio">
     <div className="text-white p-3 position-fixed top-50 start-50 translate-middle cli-item">
        <h1 className="font-rm text-5xl pb-3">Kraken Louis Jul.</h1>
        {/* <h2 className="font-rm">Next Stop: Toronto, ON</h2>
        <div className="font-rm">
          <h2 style={{ display: "inline" }}>live a </h2>
          <h2 onClick={videoTrigger} className="video-trigger cli-item">
            life
          </h2>
        </div> */}
        </div>
     </Link>
      
    </div>
  );
}

function videoTrigger() {
  const video = document.getElementById("bgv");
  video.className = video.classList.contains("hidden") ? "visible" : "hidden";
}

export default Home;
