import React from "react";
import { Link } from "react-router-dom";

const BannerPic = ({ img }) => {
  return (
    <Link
      to="/"
      className="relative block w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center max-w-full"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-white to-[#6e4515cc] opacity-50"></div>

      {/* Text Content */}
      <div
        className="absolute left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 top-1/2 -translate-y-1/2 
             p-3 sm:p-6 bg-white w-[80%] sm:max-w-lg text-center sm:text-left rounded-lg shadow-lg"
        data-aos="flip-up"
      >
        <h1 className="text-xl sm:text-3xl font-serif font-bold text-[#6e4515] mb-2 sm:mb-4">
          Residential Designs
        </h1>
        <p className="text-gray-600 font-serif text-xs sm:text-base">
          Elevating homes with thoughtful layouts, luxurious finishes, and
          personalized elements.
        </p>
        <button
          className="mt-3 px-4 sm:px-5 py-2 text-xs sm:text-base font-serif 
                     bg-[#6e4515] text-white font-medium rounded-lg 
                     hover:bg-[#5a3712] transition"
        >
          Contact Us
        </button>
      </div>
    </Link>
  );
};

export default BannerPic;
