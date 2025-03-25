import { Clock9, FolderOpenDot, Heart, Trophy } from "lucide-react"

const Banner = () => {
  return (
    <div className="relative -mt-20">
      <div className="relative h-[70vh] py-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/banner-1.jpg')" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-transparent bg-opacity-20 w-4/5 md:h-3/5 h-4/5 p-10 flex flex-col items-center justify-center border border-dashed border-[#c18847] rounded-md text-white hover:bg-[#c18847] transition-all duration-300">
            <h2 className="md:text-5xl text-2xl font-bold mb-4">Our Mission</h2>
            <p className="md:text-lg text-base text-center">To deliver exceptional interior design solutions that resonate with harmony, functionality, and elegance, leaving a lasting impression on those who experience them.</p>
          </div>
        </div>
      </div>
      <div className="relative md:h-[70vh] h-[90vh] py-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner-2.jpg')" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-transparent bg-opacity-20 w-4/5 md:h-3/5 h-4/5 p-10 flex flex-col items-center justify-center text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
              <div className="flex flex-col items-center justify-center">
                <div className="border-2 border-white p-4 rounded-md">
                  <Trophy className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">200</p>
                <p className="text-base md:text-xl mt-2 uppercase">won awards</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="border-2 border-white p-4 rounded-md">
                  <Heart className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">300</p>
                <p className="text-base md:text-xl mt-2 uppercase">happy clients</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="border-2 border-white p-4 rounded-md">
                  <Clock9 className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">400</p>
                <p className="text-base md:text-xl mt-2 uppercase">hours worked</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="border-2 border-white p-4 rounded-md">
                  <FolderOpenDot className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">250</p>
                <p className="text-base md:text-xl mt-2 uppercase">our projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner