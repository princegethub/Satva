import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Projects, { DefaultGallery } from '../HomePage/Projects';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
              Projects
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
                    <span>Projects</span>
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

          <DefaultGallery />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero