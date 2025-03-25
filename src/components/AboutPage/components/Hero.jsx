import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div>
      <div className="relative py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/bg-1.jpg')" }}>
        <div className="relative w-full z-20 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <p className="z-30 text-white text-4xl my-16 font-bold">About Us</p>
            <nav className="z-30 w-full bg-[#8f5735] text-white text-lg py-4">
                <div className="container mx-auto px-10 flex items-center space-x-3">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span>&gt;&gt;</span>
                    <span>About Us</span>
                </div>
            </nav>
        </div>
        <div className="bg-white w-full flex md:flex-row flex-col items-center justify-center py-16 md:px-10 px-5 min-h-screen">
            <div className="md:w-1/2">
                <img src="/about.jpg" alt="Hero" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:p-10 p-6">
                <h2 className="md:text-3xl text-2xl font-bold mb-4">About Satva</h2>
                <p className="md:text-lg text-base">At Satva Living, we believe every space has a story to tell. Established with a passion for design and an eye for detail, we specialize in creating interiors that inspire and captivate. From cozy homes to dynamic commercial spaces, our work reflects a perfect fusion of creativity, craftsmanship, and purpose.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero