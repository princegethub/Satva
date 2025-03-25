import React from "react";
import AnimatedContent from "@/ReactBit/AnimatedDiv";
import CulturalGallery from "@/ReactBit/CulturalGallery";

const Items = [
  {
    image:
      "https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Luxury Penthouse",
  },
  {
    image:
      "https://media.istockphoto.com/id/2158167810/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=J8SCggB5Y06kv-qW_lPpExKazHl_S1h9w4MvRh9NcWQ=",
    text: "Premium Apartment",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Beachfront Villa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Private Island",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Resort Villa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605374180794-204296e6df5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Royal Suite",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&w=1107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Skyline Apartment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1663293761258-c167c852bb0d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Poolside Mansion",
  },
];

function Projects() {
  return (
    <div
    data-aos="fade-up"
      style={{
        backgroundImage:
          "url('https://static.lsabisaau.com/satva-living/images/bg/bg-white-3.png')",
      }}
      className="md:min-h-screen w-full sm:px-8 pt-10 pb-24 max-w-full"
    >
      <h1  className="text-3xl sm:text-5xl font-serif font-semibold text-center text-[#8f5735]">
        Projects
      </h1>

      {/* Responsive Gallery */}
      <div className="relative  flex justify-center items-center mt-8 md:px-20 px-8">
        <DefaultGallery />
      </div>
    </div>
  );
}

export function DefaultGallery() {
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Private Island",
      price: "$1,200,000",
      details: "6 Bed | 5 Bath | 3000 sq ft",
    },
    {
      imageLink:
        "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Resort Villa",
      price: "$350,000",
      details: "4 Bed | 3 Bath | 1800 sq ft",
    },
    {
      imageLink:
        "https://res.cloudinary.com/dnyhe1zei/image/upload/v1741673894/banner1_mtevdi.jpg",
      title: "Royal Suite",
      price: "$400,000",
      details: "3 Bed | 2 Bath | 1200 sq ft",
    },
    {
      imageLink:
        "https://img.freepik.com/premium-psd/minimal-theme-interior-social-media-post-design_1131934-50096.jpg?w=826",
      title: "Skyline Apartment",
      price: "$230,000",
      details: "5 Bed | 4 Bath | 1620 sq ft",
    },
    {
      imageLink:
        "https://img.freepik.com/premium-psd/living-room-with-window-mockup-perspective_1332-44170.jpg?w=740",
      title: "Premium Apartment",
      price: "$180,000",
      details: "3 Bed | 2 Bath | 1100 sq ft",
    },
    {
      imageLink:
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beachfront Villa",
      price: "$500,000",
      details: "4 Bed | 3 Bath | 2000 sq ft",
    },
  ];

  return (
    <div className="grid  grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink, title, price, details }, index) => (
        <div
         data-aos="zoom-in"
          key={index}
          className="relative overflow-hidden group cursor-pointer border border-gray-200"
        >
          {/* Background Image */}
          <div className="h-[400px] w-[330px] sm:h-[440px] sm:w-[355px] bg-cover bg-center transition-transform duration-500 transform group-hover:scale-105">
            <img
              src={imageLink}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Sliding Overlay from Top to Bottom */}
          {/* <div
            dataaos="fade-up"
            className="absolute inset-0 bg-[#8f5735] bg-opacity-[0] opacity-20 h-0 group-hover:h-full transition-all duration-500 ease-in-out"
          ></div> */}

          {/* Text Content - Slides from Bottom to Corner */}
          <div
            style={{ lineHeight: "24px" }}
            className="absolute tracking-tighter bottom-4 left-4 transform translate-y-16 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-left text-white z-10"
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm">{price}</p>
            <p className="text-xs opacity-80 tracking-wide">{details}</p>
          </div>

          {/* View More Button - Center on Hover */}
          <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
            <button className="bg-[#8f5735] text-white px-5 py-2 text-sm rounded-full shadow-lg hover:bg-[#754c38] transform group-hover:translate-y-0 cursor-pointer transition-all duration-500">
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
