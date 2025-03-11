import React from "react";
import { FeaturedImageGallery } from "@/components/HomeGallery";

const Home = () => {
  return (
    <div className="bg-[#eee] py-28 text-white min-h-screen max-w-screen overflow-hidden">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 items-center">
        {/* Text Content */}
        <div
          className="text-left order-1 lg:order-none"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="50"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-[#333] font-serif">
            <span className="text-4xl sm:text-5xl block"> Satva</span> INTERIOR{" "}
            <span className="text-[#8f5735]">DESIGN</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Welcome to Satva Living – Where Vision Meets Design. Discover spaces
            where luxury meets simplicity. Whether you envision a serene
            sanctuary or a bold, vibrant aesthetic, Satva Living transforms your
            dreams into bespoke realities. Let us craft spaces that reflect your
            story with elegance and harmony.
          </p>
          <button
            className="mt-6 bg-[#8f5735] hover:bg-[#754c38] text-white px-6 py-2 rounded-md cursor-pointer 
             transition-all duration-300 transform hover:scale-105 shadow-md "
          >
            Explore
          </button>
        </div>

        {/* Image Gallery */}
        <div
          className="order-2 lg:order-none"
          // data-aos="fade-right"
          // data-aos-duration="600"
          // data-aos-delay="50"
        >
          <FeaturedImageGallery />
        </div>
      </section>
    </div>
  );
};

export default Home;
