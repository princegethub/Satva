import React from "react";
// import { FeaturedImageGallery } from "@/components/HomeGallery";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-[600px] w-full overflow-hidden flex items-center justify-center text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-scroll-pattern"></div>

      {/* Sidebar Navigation (Hidden on Small Screens) */}
      <div className="absolute left-0 hidden md:grid top-20 h-[500px] w-20 bg-white grid-rows-2 border-r border-gray-200 ">
        {/* Email Section */}
        <div className="text-[#8f5735] grid grid-rows-4 items-center justify-center w-full border-b border-gray-200">
          <div className="flex items-center flex-col row-span-4 h-full w-20">
            <p className="text-sm rotate-270 cursor-pointer whitespace-nowrap mb-20 mt-24">
              design.satva@gmail.com
            </p>
            <Mail size={20} className="rotate-270" />
          </div>
        </div>

        {/* Call Section */}
        <div className="text-[#8f5735] grid grid-rows-4 items-center justify-center w-20">
          <div className="flex items-center cursor-pointer flex-col row-span-4 h-full w-full">
            <p className="text-sm rotate-270 whitespace-nowrap mb-14 mt-20">
              +91 937 249 6705
            </p>
            <Phone size={20} />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div
        className="relative z-10 mt-28 text-center bg-opacity-75 p-6  w-[90%] sm:w-[70%] md:w-[50%] rounded-md"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="50"
      >
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#333] mb-4 leading-snug">
          Welcome to Satva Living Designs – <br /> Where Vision Meets Design
        </h1>

        {/* Achievement Highlight */}
        <p className="text-sm text-[#8f5735] font-semibold mb-4 sm:mb-6">
          In 2022, Satva Living began its journey with a remarkable achievement—
          our founder’s design for a salon was honored with the prestigious Best
          Salon Award – What’s Up 2024. This recognition set the foundation for
          a brand committed to excellence, creativity, and timeless aesthetics.
        </p>

        {/* Explore Button */}
        <button
          className=" sm:mt-8 border-2  text-white  bg-[#8f5735] px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer 
  transition-all duration-300 transform hover:scale-105 "
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Home;
