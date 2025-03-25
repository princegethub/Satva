import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/bg-1.jpg')" }}>
        <div className="relative w-full z-20 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.p 
              className="z-30 text-white text-4xl my-16 font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.p>
            <motion.nav 
              className="z-30 w-full bg-[#8f5735] text-white text-lg py-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
                <div className="container mx-auto px-10 flex items-center space-x-3">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span>&gt;&gt;</span>
                    <span>About Us</span>
                </div>
            </motion.nav>
        </div>
        <motion.div 
          className="bg-white w-full flex md:flex-row flex-col items-center justify-center py-16 md:px-10 px-5 min-h-screen"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.5, duration: 1 }}
            >
                <img src="/about.jpg" alt="Hero" className="w-full h-auto" />
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:p-10 p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 2, duration: 1 }}
            >
                <h2 className="md:text-3xl text-2xl font-bold mb-4">About Satva</h2>
                <p className="md:text-lg text-base">At Satva Living, we believe every space has a story to tell. Established with a passion for design and an eye for detail, we specialize in creating interiors that inspire and captivate. From cozy homes to dynamic commercial spaces, our work reflects a perfect fusion of creativity, craftsmanship, and purpose.</p>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero