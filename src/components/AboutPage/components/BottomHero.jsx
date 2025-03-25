import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BottomHero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <div className="flex md:flex-row max-w-screen overflow-hidden flex-col items-center justify-center py-16 px-10 bg-white">
          <motion.div 
            className="md:w-1/2 md:p-5"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <img src="/jurny.jpg" alt="Bottom Hero" className="w-full h-auto" />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:p-5 py-5 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <h2 className="md:text-6xl text-4xl font-bold mb-4 text-gray-700">Our Journey</h2>
            <p className="text-gray-700">Yamini’s love for interior design began as a pursuit of creativity and evolved into a mission to redefine spaces. Over the years, she’s worked on diverse projects, mastering the art of balancing beauty and practicality.</p>
            <p>In 2024, Satva Living was born to bring her vision of bespoke, elegant interiors to life.</p>
          </motion.div>
        </div>
        <div className="relative min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/lastBanner.jpg')" }}>
          <motion.div 
            className="absolute md:my-36 my-28 mx-10 md:mx-40 md:w-5/12 flex items-center justify-center bg-[#ffffffe3] bg-opacity-50 p-2 rounded-md"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="p-10 text-gray-700">
              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <p>At Satva Living, we believe every space tells a story, and our role is to make that story exceptional. We prioritize collaboration, transparency, and meticulous attention to detail in every project</p>
            </div>
          </motion.div>
        </div>
      </div>
    )
}

export default BottomHero