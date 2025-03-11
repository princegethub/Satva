import React from "react";
import AnimatedContent from "@/ReactBit/AnimatedDiv";
import CulturalGallery from "@/ReactBit/CulturalGallery";

const Items = [
  {
    image: "https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Luxury Penthouse",
  },
  {
    image: "https://media.istockphoto.com/id/2158167810/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=J8SCggB5Y06kv-qW_lPpExKazHl_S1h9w4MvRh9NcWQ=",
    text: "Premium Apartment",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Beachfront Villa",
  },
  {
    image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Private Island",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Resort Villa",
  },
  {
    image: "https://images.unsplash.com/photo-1605374180794-204296e6df5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Royal Suite",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&w=1107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Skyline Apartment",
  },
  {
    image: "https://images.unsplash.com/photo-1663293761258-c167c852bb0d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Poolside Mansion",
  }
];




function Projects() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://static.lsabisaau.com/satva-living/images/bg/bg-white-3.png')",
      }}
      className="h-auto w-full px-6  sm:px-8 pt-10 pb-24  max-w-full "
    >

        <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-center text-[#8f5735]">
          Projects
        </h1>
 

      {/* Responsive Gallery */}
      <div className="relative w-full flex justify-center items-center ">
        <div className="w-full h-[300px] sm:h-[450px] lg:h-[500px]  ">
          <CulturalGallery
            bend={2}
            items={Items}
            textColor="#8f5735"
            borderRadius={0.05}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
