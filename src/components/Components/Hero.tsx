import React from 'react'
import video1 from '../../../public/video1.mp4';
import ShinyText from '../ShinyText';

const Hero = () => {
  return (
    <div>
        <section className="bg-[#dac5fa] relative overflow-hidden pt-24 font-montserrat">
      

      {/* Headline */}
      <div className="text-center mt-6 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Digital Marketing Agency <br /> In The
          <ShinyText
            text="Philippines"
            disabled={false}
            speed={5}
            className="text-3xl md:text-6xl ml-2 font-bold"
          />
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We help businesses grow through effective digital marketing strategies.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          
          <button className="px-5 py-2 rounded-md bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700">
            Free Demo Call
          </button>
        </div>
      </div>

      {/* Video Section */}
        <div className="mt-12 flex justify-center relative z-10">
            <div className="rounded-xl shadow-xl overflow-hidden w-[90%] md:w-[70%] aspect-video">
                <video
                className="w-full h-full"
                autoPlay
                loop
                muted = {false}
                playsInline
                controls={true} // alisin controls kung ayaw mo lumabas play button
                >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        </div>


      {/* Background Accent */}
      <div className="absolute bottom-64 -left-10 w-[50%] h-20 bg-purple-600 opacity-40 -rotate-[7deg] "></div>
      <div className="absolute bottom-[15%] -left-10 w-[15%] h-20 bg-purple-400 opacity-40 -rotate-6"></div>
      <div className="absolute bottom-[57%] -right-4 w-[30%] h-20 bg-purple-600 opacity-40 -rotate-12"></div>
      <div className="absolute bottom-[48.5%] -right-4 w-[30%] h-20  bg-purple-400 opacity-40 -rotate-12"></div>
      <div className="absolute bottom-[42.8%] -right-4 w-[13%] h-20 bg-purple-300 opacity-45 -rotate-12"></div>
    </section>
    </div>
    
  )
}

export default Hero