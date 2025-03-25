import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/HomePage/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";


function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {/* <HeroPage/> */}
      {/* <AboutPage /> */}
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
