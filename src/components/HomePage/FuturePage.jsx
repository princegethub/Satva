import React from "react";
import { FaPaintBrush, FaCouch, FaRulerCombined, FaLightbulb } from "react-icons/fa";
import SpotlightCard from "@/ReactBit/SpotlightCard";

const features = [
  {
    icon: FaPaintBrush,
    title: "Custom Designs",
    description: "Unique designs crafted to reflect your personal taste and lifestyle.",
  },
  {
    icon: FaCouch,
    title: "Furniture Selection",
    description: "Curate premium furniture that enhances the beauty of your space.",
  },
  {
    icon: FaRulerCombined,
    title: "Space Planning",
    description: "Maximize space efficiency with professional layout strategies.",
  },
  {
    icon: FaLightbulb,
    title: "Lighting Design",
    description: "Enhance ambiance with modern and functional lighting solutions.",
  },
];

function ServicePage() {
  return (
    <div className="relative" data-aos="zoom-in">
      {/* Hero Section */}
      <div className="relative h-[350px]">
        {/* Background Image */}
        <div
          style={{
            background: "url('https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1742538276~exp=1742541876~hmac=a13f56358462345ac33668c29cc02b4e1657b902b85a73df59548179f7206f5a&w=900')",
            
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }}
        
        className="absolute inset-0  bg-cover bg-center"></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-100 z-[1]"
          style={{
            background: "rgba(110, 69, 23, 0.18)" ,

            backgroundSize: "cover",

            zIndex: 1,
          }}
        ></div>

        {/* Text Content */}
        <div className="relative flex items-center justify-center h-full text-center z-[99] text-gray-900 px-4">
          <div>
            <h1 className="text-4xl font-bold">Our Interior Design Services</h1>
            <p className="mt-2 text-lg font-medium text-gray-800">
              Elevate your living space with premium interior solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="flex justify-center mt-[-80px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-6 p-8 rounded-xl  bg-white">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="z-[9] rounded-lg cursor-pointer bg-[#f9f5f0] text-center px-6 py-6 transition-all duration-500 transform sm:hover:-translate-y-0 "
              spotlightColor="rgb(255 221 176 / 70%)"
            >
              <feature.icon className="mx-auto icon text-[#8f5735] w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-102" />
              <h2 className="text-lg font-semibold text-[#333]">{feature.title}</h2>
              <p className="text-gray-700 text-sm mt-1">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      {/* <div className="fixed right-4 top-1/3 flex flex-col space-y-3 z-50">
        <a
          href="#"
          className="p-2 bg-blue-600 text-white rounded-md hover:scale-110 transition-transform"
        >
          <FaPaintBrush size={20} />
        </a>
        <a
          href="#"
          className="p-2 bg-pink-600 text-white rounded-md hover:scale-110 transition-transform"
        >
          <FaCouch size={20} />
        </a>
        <a
          href="#"
          className="p-2 bg-green-600 text-white rounded-md hover:scale-110 transition-transform"
        >
          <FaRulerCombined size={20} />
        </a>
      </div> */}
    </div>
  );
}

export default ServicePage;
