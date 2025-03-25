import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/HomePage/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";


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
      <AboutPage />
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
