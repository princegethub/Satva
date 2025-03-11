  import React from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  import { ChevronLeft, ChevronRight } from "lucide-react";
  import SpotlightCard from "@/ReactBit/SpotLightCard";

  const testimonials = [
    {
      name: "Kiara Clifton",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "The experience was beyond expectations! The service was excellent.",
      rating: 5,
      designation: "Interior Designer",
    },
    {
      name: "Annabelle Collins",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Absolutely loved the professionalism and quality of work.",
      rating: 5,
      designation: "Architect",
    },
    {
      name: "Jacob Arthur",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "One of the best decisions I made! Highly recommended.",
      rating: 5,
      designation: "Real Estate Developer",
    },
    {
      name: "Sophia Miller",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      text: "The team was highly skilled and delivered beyond expectations.",
      rating: 5,
      designation: "Homeowner",
    },
  ];

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute -left-8 cursor-pointer sm:-left-12 md:-left-24 lg:-left-28 top-1/2 -translate-y-1/2 
                bg-white border-2 border-[#8f5735] p-1 sm:p-3 rounded-full shadow-lg z-10 
                transition-all duration-300 hover:bg-[#8f5735] hover:scale-110 group"
    >
      <ChevronLeft
        size={24}
        className="text-[#8f5735] transition-all duration-300 group-hover:text-white"
      />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute -right-8 cursor-pointer sm:-right-12 md:-right-24 lg:-right-28 top-1/2 -translate-y-1/2 
                bg-white border-2 border-[#8f5735] p-1 sm:p-3 rounded-full shadow-lg z-10 
                transition-all duration-300 hover:bg-[#8f5735] hover:scale-110 group"
    >
      <ChevronRight
        size={24}
        className="text-[#8f5735] transition-all duration-300 group-hover:text-white"
      />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 bg-[#8f5735] rounded-full"></div>,
  };

  const Testimonials = () => {
    return (
      <div
        style={{
          backgroundImage:
            "url('https://static.lsabisaau.com/satva-living/images/bg/bg-white-3.png')",
        }}
        className="px-6  overflow-hidden sm:px-8 md:px-12 py-10 pt-16 bg-[#f9f7f4] min-h-screen max-w-full"
      >
        {/* Section Heading */}
        <h1 className="text-3xl sm:text-5xl text-center font-serif font-bold text-[#8f5735] mb-8">
          What Our Clients Say
        </h1>
        {/* <p className="text-center text-gray-700 max-w-2xl mx-auto text-sm sm:text-lg">
          We take pride in delivering high-quality work and ensuring customer
          satisfaction. Here’s what our clients have to say about their experience
          with us.
        </p> */}

{/* Testimonials Slider */}
{/* Testimonials Slider */}
{/* Testimonials Slider */}
<div className="w-full flex justify-center items-center mt-8">
  <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12 lg:px-16">
    <Slider
      {...settings}
      className="!flex !justify-center sm:!justify-start !gap-4 sm:!gap-6 md:!gap-8 lg:!gap-10"
    >
      {testimonials.map((item, index) => (
        <div key={index} className="flex justify-center items-center px-2 sm:px-16 md:px-4 lg:px-6">
          <SpotlightCard
            className="custom-spotlight-card rounded-lg cursor-pointer 
                       w-full max-w-[350px] sm:max-w-[540px] md:max-w-[400px] 
                       lg:max-w-[480px] xl:max-w-[520px]
                       h-auto text-center my-4 sm:my-8 bg-white transition-all 
                       duration-500 transform hover:scale-102 shadow-lg 
                       p-3 sm:p-4 md:p-5"
            spotlightColor="rgb(110 69 21 / 56%)"
          >
            <div className="flex flex-col items-center" data-aos="flip-left" data-aos-delay={index * 200}>
              {/* Client Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 
                           object-cover rounded-full border-2 border-[#8f5735] shadow-md"
              />

              {/* Testimonial Text */}
              <p className="text-gray-600 text-xs sm:text-sm md:text-base 
                            my-2 sm:my-3 md:my-4 italic">
                "{item.text}"
              </p>

              {/* Star Rating */}
              <div className="text-yellow-400 text-sm sm:text-base md:text-lg">
                {"★".repeat(item.rating)} {"☆".repeat(5 - item.rating)}
              </div>

              {/* Client Name & Designation */}
              <h4 className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-[#8f5735]">
                {item.name}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                {item.designation}
              </p>
            </div>
          </SpotlightCard>
        </div>
      ))}
    </Slider>
  </div>
</div>






      </div>
    );
  };

  export default Testimonials;
