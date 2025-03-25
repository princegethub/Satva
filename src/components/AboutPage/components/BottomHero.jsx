const BottomHero = () => {
    return (
      <div>
        <div className="flex md:flex-row flex-col items-center justify-center py-16 px-10 bg-white">
          <div className="md:w-1/2 md:p-5">
            <img src="/jurny.jpg" alt="Bottom Hero" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:p-5 py-5 space-y-6">
            <h2 className="md:text-6xl text-4xl font-bold mb-4">Our Journey</h2>
            <p>Yamini’s love for interior design began as a pursuit of creativity and evolved into a mission to redefine spaces. Over the years, she’s worked on diverse projects, mastering the art of balancing beauty and practicality.</p>
            <p>In 2024, Satva Living was born to bring her vision of bespoke, elegant interiors to life.</p>
          </div>
        </div>
        <div className="relative min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/lastBanner.jpg')" }}>
          <div className="absolute md:my-36 my-28 mx-10 md:mx-40 md:w-5/12 flex items-center justify-center bg-[#ffffffe3] bg-opacity-50 p-2 rounded-md">
            <div className="p-10 text-black">
              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <p>At Satva Living, we believe every space tells a story, and our role is to make that story exceptional. We prioritize collaboration, transparency, and meticulous attention to detail in every project</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default BottomHero