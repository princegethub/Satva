import React from "react";
import { CheckCircle } from "lucide-react";
import Stack from "@/ReactBit/Stack";

const images = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/positive-business-analyst-drinking-coffee-reading-news_1262-14322.jpg?t=st=1742559176~exp=1742562776~hmac=148fa7b26c84996141e00311773fad3937636c1ee6bedf9d7b076069fc3bbe52&w=1480", // Zee News Award Photo
    title: "Zee News - Interior Design Award",
    content:
      "Recognized by Zee News for excellence in sustainable architecture and luxurious interior designs.",
    link: "https://www.zee.com/news/satva-living-award", // Link to Zee News Page
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-vector/top-service-badge_1284-5019.jpg?t=st=1742559676~exp=1742563276~hmac=f74b4f4632efde9a6d7a82e36fdcdc2f52fcb323e1516972251e48b5e22bba8a&w=740", // Aaj Tak Article Photo
    title: "Aaj Tak - Modern Interiors Feature",
    content:
      "Featured on Aaj Tak for our innovative approach to modern urban spaces and eco-friendly homes.",
    link: "https://www.aajtak.in/design-news",
  },

  {
    id: 3,
    img: "https://img.freepik.com/free-photo/person-choosing-where-they-work-from-hybrid-working-model_23-2149483824.jpg?t=st=1742559560~exp=1742563160~hmac=4315953664b66521c6494a578c9dada3e6fb46ec5142c41751b4841158ecfe31&w=360", // NDTV Article Photo
    title: "NDTV - Innovation in Interior Design",
    content:
      "Covered by NDTV for transforming traditional interiors into smart, sustainable living spaces.",
    link: "https://www.ndtv.com/interior-trends-2025",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-psd/medals-3d-render-champion-award-composition_314999-3094.jpg?t=st=1742559422~exp=1742563022~hmac=c998a64e8c2243b1bc7bc2e74607d7a4a0de5f2787cfa21d7b295b038e89b4c8&w=826", // India Today Recognition Photo
    title: "India Today - Eco-Friendly Designs Recognition",
    content:
      "Acknowledged by India Today for pioneering innovations in eco-conscious home design.",
    link: "https://www.indiatoday.in/eco-designs",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-vector/top-service-badge_1284-5019.jpg?t=st=1742559676~exp=1742563276~hmac=f74b4f4632efde9a6d7a82e36fdcdc2f52fcb323e1516972251e48b5e22bba8a&w=740", // Hindustan Times Feature Photo
    title: "Hindustan Times - Top Sustainable Designs",
    content:
      "Featured in Hindustan Times for redefining sustainable living with cutting-edge designs.",
    link: "https://www.hindustantimes.com/interior-designs",
  },
 
];






function WhatWeDo() {
  return (
    <>
      <div className="relative w-full h-auto md:h-[700px] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 bg-cover bg-center py-10 md:py-0 overflow-hidden bg-[url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?t=st=1741588472~exp=1741592072~hmac=61f23d3f2cfbafc7d54edd4be0e9bf88ac3017bcb058788b9ddb67e35e0aee7d&w=1800')]   bg-[#f5f5ef]">
        {/* Left Side Content */}
        <div
          className="md:w-1/2 text-left p-6 md:p-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {/* Awards & Media Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-serif text-[#8F5735] mb-4">
              Awards & Media Coverage
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Our work has been recognized by leading publications and media
              houses for excellence in design and innovation. Explore some of
              our most notable achievements:
            </p>
            <ul className="list-none space-y-3">
              {[
                {
                  title:
                    "Satva Living Wins Prestigious Interior Design Award 2025",
                  source: "Zee News - March 2025",
                },
                {
                  title:
                    "Revolutionizing Smart Homes with Eco-Friendly Interiors",
                  source: "Aaj Tak - Feb 2025",
                },
                {
                  title:
                    "Recognized by 'NDTV' for Excellence in Modern Interior Designs",
                  source: "NDTV - Dec 2024",
                },
                {
                  title:
                    "Top 10 Sustainable Designs Honored at Global Interior Summit",
                  source: "India Today - Jan 2025",
                },
              
              ].map((news, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 text-gray-600"
                >
                  <CheckCircle className="text-[#8F5735] mr-2 mt-1" />
                  <div>
                    <p className="text-md font-semibold">{news.title}</p>
                    <p className="text-sm text-gray-500">{news.source}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-8 px-6 py-2 cursor-pointer bg-[#8F5735] text-white font-medium rounded-lg hover:bg-[#723e2a] transition">
            Explore More
          </button>
        </div>

        {/* Right Side - Stack with Cards */}
        <div
          className="relative w-full md:w-1/2 flex justify-start items-start sm:justify-center sm:items-center -ml-10 sm:ml-0 mt-8 md:mt-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="max-w-full">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 350, height: 480 }}
              cardsData={images}
            />
          </div>
        </div>
      </div>

   
    </>
  );
}

export default WhatWeDo;
