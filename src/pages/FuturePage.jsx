import React from "react";
import { Home, Handshake, Wallet, Headset } from "lucide-react";
import { FaFacebookF, FaInstagram, FaHouzz } from "react-icons/fa";
import SpotlightCard from "../ReactBit/SpotLightCard";

function FuturePage() {
  return (
    <div className="relative " data-aos="zoom-in">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1663293761258-c167c852bb0d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6e45158f] to-[#6e45158f] opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#6e45158f] to-[#6e45158f] opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#6e45158f] to-[#6e45158f] opacity-100"></div>

        {/* Text Content */}
        <div className="relative flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl font-bold drop-shadow-lg">
              Feature In News/Magazines
            </h1>
            <p className="mt-2 text-lg font-medium">
              At Satva Living, we believe every space has a story to tell.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="flex justify-center mt-[-80px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  p-8 rounded-xl shadow-2xl">
          {features.map((feature, index) => (
            <SpotlightCard
            key={index}
              className="custom-spotlight-card  rounded-lg cursor-pointer bg-blue-600  text-center px-6 py-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl "
              spotlightColor="rgb(110 69 21 / 56%)"
            >

                <feature.icon className="mx-auto icon text-gray-800 w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h2 className="text-lg font-semibold">{feature.title}</h2>
                <p className="text-gray-700 text-sm mt-1">
                  {feature.description}
                </p>
              
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      {/* <div className="fixed right-4 top-1/3 flex flex-col space-y-3">
        <a href="#" className="p-2 bg-blue-600 text-white rounded-md hover:scale-110 transition-transform">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="p-2 bg-pink-600 text-white rounded-md hover:scale-110 transition-transform">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="p-2 bg-green-600 text-white rounded-md hover:scale-110 transition-transform">
          <FaHouzz size={20} />
        </a>
      </div> */}
    </div>
  );
}

// Feature Data
const features = [
  {
    icon: Home,
    title: "Interior for Home",
    description: "Lorem ipsum suspendisse ultrices gravida.",
  },
  {
    icon: Handshake,
    title: "Trusted by thousands",
    description: "Lorem ipsum suspendisse ultrices gravida.",
  },
  {
    icon: Wallet,
    title: "Financing made easy",
    description: "Lorem ipsum suspendisse ultrices gravida.",
  },
  {
    icon: Headset,
    title: "24/7 support",
    description: "Lorem ipsum suspendisse ultrices gravida.",
  },
];

export default FuturePage;
