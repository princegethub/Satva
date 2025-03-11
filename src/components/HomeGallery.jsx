import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://res.cloudinary.com/dnyhe1zei/image/upload/v1741674839/banner1_a8avg7.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dnyhe1zei/image/upload/v1741674543/banner5_ff2qc5.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dnyhe1zei/image/upload/v1741673894/banner1_mtevdi.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dnyhe1zei/image/upload/v1741674374/banner6_idrq0k.jpg",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dnyhe1zei/image/upload/v1741673923/banner2_aoe428.jpg",
    },
  ];

  const [active, setActive] = useState(data[0].imgelink);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700 });

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFade(false);
      }, 500); // Half second fade transition
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActive(data[index].imgelink);
  }, [index]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Main Image with Smooth Fade Effect */}
      <div
        className={`w-full max-w-4xl h-[400px] rounded-lg overflow-hidden relative`}
      >
        <img
          key={active}
          className={`w-full h-full object-cover object-center transition-opacity duration-100 ease-in-out ${
            fade ? "opacity-100" : "opacity-100"
          }`}
          data-aos="zoom-in-up"
          src={active}
          alt="Selected"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {data.map(({ imgelink }, idx) => (
          <img
            key={idx}
            onMouseEnter={() => setIndex(idx)}
            onClick={() => setIndex(idx)}
            src={imgelink}
            className={`h-20 w-full cursor-pointer rounded-lg object-cover object-center border-2 transition-all duration-300 ${
              active === imgelink ? "border-[#8f5735] scale-105" : "border-transparent"
            }`}
            alt="gallery-thumbnail"
            // data-aos="zoom-in"
          />
        ))}
      </div>
    </div>
  );
}
