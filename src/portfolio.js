document.body.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  });
});

const isHover = (e) => e.parentElement.querySelector(":hover") === e;

const redArea = document.getElementById("ska");
const myCursor = document.getElementById("csr");
const cliclable1 = document.getElementById("cla-1");
const cliclable2 = document.getElementById("cla-2");
const cliclable3 = document.getElementById("cla-3");
const cliclable4 = document.getElementById("cla-4");
const clickables = document.getElementsByClassName("cla");

console.log(clickables);

const isHover2 = (ee) => ee.parentElement.querySelector(":hover") === ee;

document.addEventListener("mousemove", function checkHover2() {
  const hoveredRed = isHover(redArea);

  var enlarge = false;
  for (let i = 0; i < clickables.length; i++) {
    const hoveredcla = isHover2(clickables[i]);
    // console.log(hoveredcla);
    if (hoveredcla) {
      enlarge = true;
      break;
    }
  }

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
});
