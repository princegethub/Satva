import React from "react";
import { motion } from "framer-motion";

import Areoplane from "@assets/Areoplane.png";
import Stack from "@/ReactBit/Stack";
import { CheckCircle } from "lucide-react";

const images = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    img: "https://plus.unsplash.com/premium_photo-1676321688594-7c2e60a70de1?w=1000&auto=format&fit=crop&q=60",
  },
];


function WhatWeDo() {
  return (
    <div className="relative w-full h-auto md:h-[800px] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 bg-cover bg-center py-10 md:py-0 overflow-hidden bg-[url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?t=st=1741588472~exp=1741592072~hmac=61f23d3f2cfbafc7d54edd4be0e9bf88ac3017bcb058788b9ddb67e35e0aee7d&w=1800')]">
      
      {/* Left Side Content */}
      <div
        className="md:w-1/2 text-left p-6 md:p-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8F5735] mb-6">
          What We Do
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          We specialize in developing high-quality real estate projects that
          blend luxury, sustainability, and modern technology. Our mission is to
          create spaces that offer comfort, style, and long-term value for our
          clients.
        </p>
        <div className="mt-6 space-y-3">
          {[
            "High-End Residential & Commercial Properties",
            "Smart & Sustainable Architecture",
            "End-to-End Property Consultation",
            "Hassle-Free Buying, Selling & Leasing",
          ].map((item, index) => (
            <p key={index} className="flex items-center text-gray-600">
              <CheckCircle className="text-[#8F5735] mr-2" />
              {item}
            </p>
          ))}
        </div>
        <button className="mt-6 px-6 py-2 cursor-pointer bg-[#8F5735] text-white font-medium rounded-lg hover:bg-[#723e2a] transition">
          Explore More
        </button>
      </div>

      {/* Right Side - Images */}
      <div
        className="relative md:w-1/2 flex justify-start items-start sm:justify-center  sm:items-center -ml-10 sm:ml-0 mt-8 md:mt-0"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="max-w-full">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 350, height: 450 }}
            cardsData={images}
          />
        </div>
      </div>
      
    </div>
  );
}


export default WhatWeDo;
