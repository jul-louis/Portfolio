import React from "react";
import { gsap } from "gsap";

function Cursor() {
  return <div className="cursor" id="csr"></div>;
}

function cursorUpdate() {
  var redArea = document.getElementById("ska");
  var myCursor = document.getElementById("csr");
  var clickables = document.getElementsByClassName("cli-item");
  var zoomables = document.getElementsByClassName("z-item");
  var isHover = (ee) => ee.parentElement.querySelector(":hover") === ee;

  var hoveredRed = false;
  var enlarge = false;
  if (redArea) {
    hoveredRed = isHover(redArea);
  }
  if (clickables) {
    for (let i = 0; i < clickables.length; i++) {
      var hoveredcla = isHover(clickables[i]);

      if (hoveredcla) {
        enlarge = true;
        break;
      }
    }
  }
  if (zoomables) {
    for (let i = 0; i < zoomables.length; i++) {
      var hoveredcla = isHover(zoomables[i]);

      if (hoveredcla) {
        enlarge = true;
        break;
      }
    }
  }
  if (myCursor) {
    if (enlarge === true) {
      myCursor.style.width = "28px";
      myCursor.style.height = "28px";
      myCursor.style.margin = "-14px";
      myCursor.style.opacity = "0.5";
    } else if (enlarge === false) {
      myCursor.style.width = "12px";
      myCursor.style.height = "12px";
      myCursor.style.margin = "-6px";
      myCursor.style.opacity = "0.8";
    }
    if (hoveredRed === true) {
      myCursor.style.background = "white";
    } else if (hoveredRed === false) {
      myCursor.style.background = "red";
    }
  }
}

document.body.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursorUpdate();

  if (document.getElementById("csr")) {
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY,
    });
  }
});

export default Cursor;
