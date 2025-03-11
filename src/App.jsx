import React from "react";
import { BrowserRouter , Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "../src/pages/Home";

import "./index.css";
import Projects from "./pages/Projects";
import FeaturePage from "./pages/FuturePage";
import GalleryPage from "./pages/GalleryPage";

import AOS from "aos";
import "aos/dist/aos.css";

import AboutUs from "./pages/WhatWeDo";
import BannerPic from "./components/BannerPic";
import WhatWeDo from "./pages/WhatWeDo";
import Testimonials from "./pages/Testimonail";
import Footer from "./components/Footer";
import FlottingButton from "./components/FlottingButton";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
    <Home />
      <Projects />
      <FeaturePage />

      <WhatWeDo />
      <GalleryPage /> 

      <BannerPic img="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1000&auto=format&fit=crop&q=60" />
      <Testimonials /> 
      <Footer/>





    <FlottingButton /> 

      
    </BrowserRouter>
  );
}

export default App;
