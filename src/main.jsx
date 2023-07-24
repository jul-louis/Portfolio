// import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import App from "./App";
import About from "./components/About";
import Blogs from "./components/Blogs";
import { gsap } from "gsap";
import Business from "./components/Business";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
);
