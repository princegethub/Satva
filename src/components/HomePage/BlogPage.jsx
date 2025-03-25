import React, { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const blogItems = [
  {
    image:
    "https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=1170&auto=format&fit=crop",
    title: "5 Interior Design Trends ....",
    date: "Jun 23, 2020",
    author: "By Admin",
    description:
      "Stay updated with the latest in interior design trends, expert tips, and creative ideas to elevate your spaces.",
    likes: 306,
    comments: 34,
    shares: 122,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=967&auto=format&fit=crop",
    title: "The Art of Minimalism ....",
    date: "Jun 23, 2020",
    author: "By Admin",
    description:
      "Stay updated with the latest in interior design trends, expert tips, and creative ideas to elevate your spaces.",
    likes: 306,
    comments: 34,
    shares: 122,
  },
  {
    image:
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1032&auto=format&fit=crop",
    title: "How to Create Sustainable....",
    date: "Jun 23, 2020",
    author: "By Admin",
    description:
      "Stay updated with the latest in interior design trends, expert tips, and creative ideas to elevate your spaces.",
    likes: 306,
    comments: 34,
    shares: 122,
  },
  {
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1000&auto=format&fit=crop&q=60",
    title: "Modern Home Decor Ideas ....",
    date: "Jul 12, 2021",
    author: "By Admin",
    description:
      "Explore fresh and innovative home decor ideas to elevate the aesthetics of your space.",
    likes: 412,
    comments: 45,
    shares: 189,
  },
];

function BlogPage() {
  const [showAll] = useState(false);

  // Show only 3 items initially in large screens
  const visibleItems = showAll ? blogItems : blogItems.slice(0, 3);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://static.lsabisaau.com/satva-living/images/bg/bg-white-3.png')",
      }}
      className="w-full sm:px-8 pt-16 pb-24 flex justify-center"
    >
      <div className="md:px-20 px-8">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-center text-[#8f5735] mb-8">
          Our Blog
        </h1>

        {/* Grid Layout with 3 Cards Limit */}
        <BlogGallery visibleItems={visibleItems} />

    
        {/* "See More" Button */}
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => window.open("/blog", "_self")} // Opens the blog page
              className="bg-[#8f5735] text-white px-6 py-3 rounded-md cursor-pointer hover:bg-[#754c38] transition duration-300"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;




export function BlogGallery({ visibleItems = [] }) {
  if (!visibleItems || visibleItems.length === 0) {
    return <p className="text-center text-gray-500">No blog items available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleItems.map((item, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden group transition-transform duration-300"
        >
          {/* Image Section */}
          <div className="relative w-full overflow-hidden group h-[240px] sm:h-[280px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0062ff] opacity-20 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>
          </div>

          {/* Content Section */}
          <div className="p-4 relative">
            <h2 className="text-xl font-semibold text-[#8f5735] mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-[#8f5735] mb-2">
              {item.date} / <span className="font-medium">{item.author}</span>
            </p>
            <p className="text-gray-500 mb-4">{item.description}</p>

            {/* Stats Section */}
            <div className="flex items-center space-x-4 text-[#8f5735] mb-4">
              <div className="flex items-center space-x-1">
                <Heart size={18} />
                <span className="text-sm">{item.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle size={18} />
                <span className="text-sm">{item.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share2 size={18} />
                <span className="text-sm">{item.shares}</span>
              </div>
            </div>

            {/* Read More Link with Translate Animation */}
            <a
              href="#"
              className="text-[#8f5735] hover:text-gray-600 inline-block transition-transform transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500"
            >
              Read more...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}



