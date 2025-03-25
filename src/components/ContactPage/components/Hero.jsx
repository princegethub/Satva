import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="relative max-w-screen overflow-hidden py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/bg-1.jpg')" }}>
        <div className="relative w-full z-20 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.p 
              className="z-30 text-white text-4xl my-16 font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              Contact Us
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
                    <span>Contact</span>
                </div>
            </motion.nav>
        </div>
        <motion.div 
          className="bg-white w-full flex md:flex-row flex-col items-center justify-center py-16 md:px-10 px-5 min-h-screen"
        //   initial={{ opacity: 0 }}
        //   animate={isInView ? { opacity: 1 } : {}}
        //   transition={{ delay: 1, duration: 1 }}
        >
            <motion.div 
              className="md:w-1/2 md:p-10 p-6 space-y-10"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
            >
                <h2 className="md:text-4xl text-3xl font-bold  text-[#8f5735]">Keep In Touch</h2>
                <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-[#8f5735]" />
                    <p className="text-lg text-gray-700">Noida (UP)</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-[#8f5735]" />
                    <p className="text-lg text-gray-700">design.satva@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-[#8f5735]" />
                    <p className="text-lg text-gray-700">+91 8527585779</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-[#8f5735]" />
                    <p className="text-lg text-gray-700">+91 8527585779</p>
                </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:p-10 p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
            >
                <h2 className="md:text-4xl text-3xl font-bold mb-4 text-[#8f5735]">Have a Question?</h2>
                <h3 className="md:text-3xl text-2xl font-semibold mb-6 text-gray-700">CONTACT US</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8f5735]" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8f5735]" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8f5735]" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8f5735]" rows="4"></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-3 bg-[#8f5735] text-white rounded-md font-semibold hover:bg-[#6e4427] transition duration-300">Submit</button>
                </form>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero