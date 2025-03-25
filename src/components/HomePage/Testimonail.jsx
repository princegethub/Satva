import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Delhi, India",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    review:
      "Great service! The team was very professional and delivered the project on time. Highly recommended.",
    rating: 4.5,
  },
  {
    name: "Priya Verma",
    location: "Mumbai, India",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    review:
      "Exceptional quality and great attention to detail. Loved the experience, will definitely use their service again.",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    location: "Bangalore, India",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
    review:
      "The team went above and beyond to ensure timely delivery and smooth communication. Very satisfied!",
    rating: 4,
  },
  // {
  //   name: "Neha Gupta",
  //   location: "Hyderabad, India",
  //   image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
  //   review:
  //     "The best experience I’ve had so far. Their dedication and support are commendable.",
  //   rating: 4.5,
  // },
  // {
  //   name: "Vikram Patil",
  //   location: "Pune, India",
  //   image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp",
  //   review:
  //     "Professional and very approachable. The team delivered the project ahead of schedule.",
  //   rating: 4.8,
  // },
];


const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex justify-center mt-2">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-[#8f5735] text-lg" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-[#8f5735] text-lg" />}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <FaStar key={`empty-${index}`} className="text-gray-300 text-lg" />
      ))}
    </div>
  );
};

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (


<div
  style={{
    backgroundImage:
      "url('https://static.lsabisaau.com/satva-living/images/bg/bg-white-3.png')",
  }}
  className="py-16 px-4 max-w-full overflow-hidden sm:px-6 lg:px-8"
>
  <div className="text-center mb-12">
    <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-[#8f5735]">
      What Our Clients Say
    </h1>
  </div>

  <div className="w-full max-w-[1200px] mx-auto">
    <Slider
      {...settings}
      slidesToShow={3} // Show 3 cards on Laptop
      slidesToScroll={1}
      infinite={true}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3, // 3 cards on large screens
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2, // 2 cards on tablets
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1, // 1 card on mobile
            slidesToScroll: 1,
          },
        },
      ]}
      className="custom-slider"
    >
      {testimonials.map((testimonial, index) => (
        <div
  key={index}
  style={{
    margin: "0 !important",
    padding: "0 !important",
  }}
  className="px-2 max-w-[90%] mx-auto"
>
  <div className="bg-white rounded-lg p-6 text-center h-[460px] w-[300px] flex flex-col items-center justify-start space-y-4 ">
    {/* Profile Image and Name */}
    <div className="flex flex-col items-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full mb-2"
      />
      <h5 className="text-xl font-semibold text-gray-800">{testimonial.name}</h5>
    </div>

    {/* Star Rating */}
    <div className="mt-1">
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Position */}

    {/* Review */}
    <div style={{
      lineHeight: "24px",
    }} className="text-sm text-gray-600 mt-1 px-4">
      <FaQuoteLeft className="inline-block mr-2 text-[#8f5735]" />
      {testimonial.review}
    </div>
      <h6 className="text-sm text-[#8f5735] font-medium">{testimonial.location}</h6>
  </div>
</div>

      ))}
    </Slider>
  </div>

  {/* Custom CSS to Remove Extra Padding */}
  <style>{`
    .slick-slide {
      padding: 0 10px !important; /* Reduced Gap Between Cards */
    }
    .slick-list {
      margin: 0 -10px !important; /* Balanced Left-Right Margin */
    }
    .custom-dots li button:before {
      color: #8f5735;
      font-size: 12px;
    }
    .custom-dots li.slick-active button:before {
      color: #8f5735;
      font-size: 14px;
    }
  `}</style>
</div>

  );
}

export default Testimonial;
