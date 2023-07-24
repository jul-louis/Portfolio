import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Footer() {
  return (
    <footer
      className="font-rm"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        width: "100%",
        position: "stick",
        bottom: "0",
        zIndex: "2",
      }}
    >
      <br />
      <div className="container text-light df aic justify-content-center">
        <div className="df aic justify-content-center fd-format">
          <p className="lg-ft footer-format">
            contact&nbsp;
            <a className="cli-item" href="mailto:louis@krakenlouis.com?subject=Hello">
              email
            </a>
          </p>
          <p className="lg-ft footer-format">
            about&nbsp;me&nbsp;
            <a className="cli-item" href="About">
              here
            </a>
          </p>
        </div>

        <div className="df aic justify-content-center fd-format">
          <p className="lg-ft footer-format">
            code&nbsp;
            <a className="cli-item" href="https://github.com/">
              github
            </a>
          </p>
          <p className="lg-ft footer-format">
            networking&nbsp;
            <a
              className="cli-item"
              target="_blank"
              href="https://www.linkedin.com/in/louis-kano/"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>
      <div className="container text-light df aic justify-content-center">
        &copy; 2022 Louis Jullien K.
      </div>
    </footer>
  );
}

export default Footer;
