import { motion } from "framer-motion";

const Map = () => {
  return (
    <div className="relative -mt-20">
      <motion.iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400466074!2d77.04417434001834!3d28.527252739872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1742903329237!5m2!1sen!2sin" 
        width="100%" 
        height="600" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      ></motion.iframe>
    </div>
  )
}

export default Map