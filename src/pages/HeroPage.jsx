import React, { Suspense } from "react";
import Navbar from "../components/HomePage/Navbar";
import Projects from "../components/HomePage/Projects";
import Home from "../components/HomePage/Home";
import WhatWeDo from "../components/HomePage/WhatWeDo";
import GalleryPage from "../components/HomePage/GalleryPage";
import Testimonials from "../components/HomePage/Testimonail";
import Footer from "../components/Footer";
import BannerPic from "../components/BannerPic";
import FeaturePage from '../components/HomePage/FuturePage';
import BlogPage from "../components/HomePage/BlogPage";

function HeroPage() {
  return (
    <div>
      <Home />
      <Projects />
      <FeaturePage />
      <WhatWeDo />
      <GalleryPage />
      <BannerPic img="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1000&auto=format&fit=crop&q=60" />
      <BlogPage />
      <Testimonials />
      <Footer />

      {/* <FloatingButton /> */}
    </div>
  );
}

export default HeroPage;
