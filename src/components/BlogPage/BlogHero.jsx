import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Projects, { DefaultGallery } from '../HomePage/Projects';
import BlogPage, { BlogGallery } from "../HomePage/BlogPage";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const visibleItems = showAll ? blogItems : blogItems.slice(0, 4);
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

  return (
    <div ref={ref}>
      <div className="relative py-20 bg-fixed bg-center max-w-screen overflow-hidden bg-cover" style={{ backgroundImage: "url('/bg-1.jpg')" }}>
        <div className="relative w-full z-20 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
            <motion.p 
              className="z-30 text-white text-4xl my-16 font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.2 }}
            >
              Blogs
            </motion.p>
            <motion.nav 
              className="z-30 w-full bg-[#8f5735] text-white text-lg py-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0, duration: 0.2 }}
            >
                <div className="container mx-auto px-10 flex items-center space-x-3">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span>&gt;&gt;</span>
                    <span>Blogs</span>
                </div>
            </motion.nav>
        </div>
        <motion.div 
          className="bg-white w-full flex  flex-col items-center justify-center py-16 md:px-30 px-5 min-h-screen"
          // initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          // transition={{ delay: 0, duration: 0.2 }}
        >



      {/* <p  style={{lineHeight: '30px' }} className="text-gray-700 pb-16 ">Our Portfolio – Where Dreams Take Shape At Satva Living, each project reflects our dedication to excellence and creativity. Whether it’s a sprawling residential space or a functional yet chic commercial environment, our designs are crafted to elevate lifestyles and experiences.</p> */}

      <BlogGallery visibleItems={blogItems} />

        </motion.div>
      </div>
    </div>
  )
}

export default Hero