import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import imagesLoaded from "imagesloaded";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "flowbite/dist/flowbite.min.js";
import Game from "./Game";
import { useEffect, useRef, useState } from 'react';
import Footer from "./Footer";

function Portfolio() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = gsap.utils.toArray("img");

    const handleImagesLoaded = () => {
      setIsLoaded(true);
    };

    const checkAllImagesLoaded = () => {
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          return false;
        }
      }
      return true;
    };

    const checkImagesLoadedInterval = setInterval(() => {
      if (checkAllImagesLoaded()) {
        clearInterval(checkImagesLoadedInterval);
        handleImagesLoaded();
      }
    }, 100);

    return () => {
      clearInterval(checkImagesLoadedInterval);
    };
  }, []);

  const headerRef0 = useRef(null);

  const handleMouseMove = (event) => {
    const header = headerRef0.current;
    const rect = header.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const bgX = (mouseX / rect.width) * 100; // Calculate percentage position in X-axis
    const bgY = (mouseY / rect.height) * 100; // Calculate percentage position in Y-axis
    const zoomLevel = 3; // Adjust this value to control the zoom level

    header.style.backgroundPosition = `${bgX}% ${bgY}%`;
    header.style.backgroundSize = `calc(100% * ${zoomLevel})`;
  };

  const handleMouseOut = () => {
    const header = headerRef0.current;
    header.style.backgroundPosition = 'center';
    header.style.backgroundSize = 'contain';
  };

  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headerElement = headerRef.current;
    const fadeInAnimation = gsap.to(headerElement, {
      opacity: 1,
      filter: "brightness(1)",
      backgroundSize: "25%",
      duration: 1.4,
      ease: "power1.out",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: headerElement,
      start: "top 130%",
      onEnter: () => fadeInAnimation.play(),
      onLeaveBack: () => fadeInAnimation.reverse(),
    });

    return () => {
      // ScrollTrigger.getById(headerElement).kill();
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray("img");
  const skillSample = () => {
    document.body.style.overflow = "auto";
    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] = index % 2 ? ["-100%", "60%"] : [w.scrollWidth * 1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
          },
        }
      );
    });
  };
  useEffect(() => {
    if (isLoaded) {
      // Enable scrolling once all elements are loaded
      document.body.style.overflow = "auto";
      skillSample();
    }
  }, [isLoaded]);

  return (
    <div>
      {!isLoaded && (
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>
      )}

      { (
        <>
        <div className="rp cvr nav">
        <h2 className="mn ti text-2xl" style={{ fontStyle: "italic" }}>
          menu
        </h2>
      </div>
      <div className="rp cvr nav navl">
        <h2 className="mn ti" style={{ fontStyle: "italic" }}>
          <Link className="nul cli-item text-2xl" to="/">
            <h2>&rarr; back to kraken</h2>
          </Link>
        </h2>
        <a className="nul cli-item text-2xl" href="#pg-info">
          <h2>information</h2>
        </a>
        <a className="nul cli-item text-2xl" href="#pg-skills">
          <h2>skills</h2>
        </a>
        <a className="nul cli-item text-2xl" href="#pg-proj">
          <h2>projects</h2>
        </a>
        <a className="nul cli-item text-2xl" href="#pg-contacts">
          <h2>contacts +</h2>
        </a>
        <a className="nul cli-item text-2xl" href="#pg-title">
          <h2>résumé</h2>
        </a>
      </div>
      <div id="pg-title" className="demo-wrapper">
        <header className="df aic jcc" id="">
          <div className="fx content">
            <h1 className="text-white text-6xl my-4 opacity-100">
              why my heart beats faster
            </h1>
            <h2 className="text-red text-3xl opacity-100">PORTFOLIO</h2>
          </div>
        </header>

        <header className="df aic jcc cvr" id="pg-show">
          <div className="subtitle">Interactive</div>
          <div className="df aic jcc sarea overflow-hidden">
            {" "}
            {/* <h3 className="text-2xl">
              {" "}
              there will be an interactive game or a video to demostrate an
              introduction{" "}
            </h3>{" "} */}
            <Game />
          </div>
        </header>

        <div id="offs">
          <header className="df aic jcc cvr" id="pg-info">
            <div className="content">
              <h1 className="text-4xl">Louis&nbsp;Jul.&nbsp;Kano</h1>
              <h2 className="text-2xl">Experience</h2>
              <br />
              <h3 className="text-xl">
                In 2018, I embarked on my academic journey in Canada at the
                University of Alberta, Edmonton, commencing my undergraduate
                studies in the field of Computer Engineering. This year, in
                2023, I have successfully completed my program, obtaining a
                Bachelor of Science in Computer Engineering with a focus in
                Software Engineering. I am proud to announce that I achieved
                this degree with Distinction.
              </h3>
            </div>
          </header>

          <header id="pg-skills">
            <div className="sk df aic jcc"></div>
            <div className="skt df aic jcc img-bg" id="ska">
              Hi, I play anchors in Splatoon lol
            </div>
            <section className="demo-text overflow-hidden">
              <div
                className="wrapper text overflow-hidden"
                id="g"
                style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
              >
                Skills
              </div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">
                Full&nbsp;Stack&nbsp;Web&nbsp;Development
              </div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">Blockchain&nbsp;Cryptocurrency</div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">
                Game&nbsp;Design&nbsp;&&nbsp;Dev
              </div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">Embedded&nbsp;Systems</div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">
                Computer&nbsp;&&nbsp;Software&nbsp;Engineering
              </div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">UI/UX&nbsp;Design</div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">
                React&nbsp;Vite&nbsp;&&nbsp;Tailwind
              </div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">Blockchain&nbsp;Development</div>
            </section>
            <section className="demo-text overflow-hidden">
              <div className="wrapper text overflow-hidden">
                Computer&nbsp;&&nbsp;Software&nbsp;Engineering
              </div>
            </section>
          </header>

          <header
            className="df aic jcc cvr"
            style={{ backgroundColor: "black", color: "white" }}
            id="pg-proj"
          >
            <div className="content">
              <h1 className="text-4xl">Projects</h1>
              <h2 className="text-2xl">what i have done</h2>
              <br />
              <h3 className="text-xl">
                Throughout my academic studies and personal exploration in this
                field, I have accomplished numerous projects that have
                solidified my foundation and contributed to my professional
                growth. These endeavours, from research papers to hands-on
                experiments, have provided me with invaluable practical
                experience and a comprehensive skill set. Recognized for my
                dedication and innovative solutions, I am excited to leverage my
                project-based experiences to make meaningful contributions in
                professional settings and continue my lifelong learning.
              </h3>
            </div>
          </header>

          <header
            className="df aic jcc cvr"
            style={{
              backgroundColor: 'white',
              color: 'black',
            }}
            id="pg-proj0"
          >
            <div className="content p-4 sm:p-4 md:p-5 lg:p-6" style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
              <h1 className="text-4xl">NFT Mining & Contract Management System</h1>
              <h2 className="text-2xl">Sponsored by Suissa Design</h2>
              <br/>
              <h3 className="text-xl">
                Powered by the open source hyperledger fabric permissioned blockchain maintains an immutable ledger of transactions, such as the creation, or modification of contracts, advancing milestones, and minting of NFTs. 
              </h3>
            </div>
          </header>

          <header
            className="df aic jcc cvr"
            style={{
              backgroundSize: 'contain 80%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'black',
              color: 'black',
              filter: 'brightness(0)',
              loading: 'eager',
            }}
            ref={headerRef}
            id="pg-proj1"
          >
          </header>

          <header
            className="df aic jcc cvr"
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'black',
              color: 'black',
              loading: 'eager',
            }}
            id="pg-proj1-poster"
          >
          </header>

          <header
            className="df aic jcc cvr"
            style={{
              // backgroundImage: 'url(../media/images/s.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'white',
              color: 'black',
            }}
            id="pg-proj2"
          >
            <div className="content p-4 sm:p-4 md:p-5 lg:p-6" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
              <h1 className="text-4xl">Android Social App for Habits Tracking</h1>
              <h2 className="text-2xl">Goalog: follow your lifestyle</h2>
              <br />
              <h3 className="text-xl">
                GOALog is an innovative social media platform designed to bring together individuals who share similar lifestyles and habits. 
                It aims to create a supportive and engaging online community where users can connect, interact, and inspire one another to achieve their goals.
              </h3>
              <br />
              <h3 className="text-xl">
              </h3>
              <br />
              <h3 className="italic"><a className="cli-item text-inherit" href='https://github.com/CMPUT301F21T45/GoAlog/wiki' target="blank"><span className="text-black underline text-xl">&rarr; GOALog Wiki</span></a></h3>
            </div>
          </header>

          <header
            className="df aic jcc cvr z-item"
            ref={headerRef0}
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'white',
              color: 'black',
              transition: 'background-position 0.3s, background-size 2s',
            }}
            id="pg-proj2-poster"
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
          >
          </header>

          <header
            className="df aic jcc cvr"
            style={{
              // backgroundImage: 'url(../media/images/s.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'white',
              color: 'black',
            }}
            id="pg-proj3"
          >
            <div className="content p-4 sm:p-4 md:p-5 lg:p-6" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: 'white' }}>
              <h1 className="text-4xl">MOOC Learning & Management System</h1>
              <h2 className="text-2xl">Carriton Learning: Learn at Your Pace</h2>
              <br />
              <h3 className="text-xl">
                Php & Sqlite Web Application 
              </h3>
              <h3 className="text-xl">Delivering the courses & managent tool in a modern way.</h3>
              <br />
              <h3 className="text-xl">
              </h3>
              <br />
              <h3 className="italic"><a className="cli-item text-inherit" href='' target="blank"><span className="text-white underline text-xl">&rarr; Start Learning Now</span></a></h3>
            </div>
          </header>

          <header className="df aic jcc cvr" id="pg-contacts" style={{backgroundColor: 'black', color: 'white'}}>
            <div className="content">
              <h1 className="text-4xl">Hi&nbsp;There,</h1>
              <h2 className="text-3xl">leave me a message :&#41;</h2>
              <h3 className="text-xl"></h3>
              <div className="bg-gray-900 px-4 py-8 my-4 rounded-xl">
                <label
                  htmlFor="helper-text"
                  className="block mb-2 text-sm font-medium text-white font-rm"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="font-rm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@kraken.ca"
                />
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-200 font-rm"
                >
                  We’ll never share your details. Read our{" "}
                  <a
                    href="#"
                    className="cli-item font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>

                <textarea
                  id="message"
                  rows="4"
                  className="font-rm block my-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <button
                  type="submit"
                  className="font-rm cli-item inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-red-800 hover:bg-red-800 hover:text-white"
                >
                  Send Message
                </button>
              </div>
            </div>
            <Footer />
          </header>
        </div>
      </div>
        </>
       )}

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Portfolio;
