import React from 'react'
import Carouselcard from "./Carouselcard";
const WIESpeakers = () => {
  return (
   <>

   <section className="relative w-full mt-20 h-[220px] overflow-hidden rounded-2xl">

      {/* 🔁 BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0 opacity-55">
        <Carouselcard />
      </div>

      {/* 🌈 DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/85 via-blue-700/75 to-blue-900/85" />

      {/* 🏆 HERO CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 gap-4">

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400"
          style={{
            textShadow:
              "2px 2px 0 rgba(0,0,0,0.5), 4px 4px 0 rgba(0,0,0,0.4)",
          }}
        >
       WIE SPEAKER
        </h1>

        {/* <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
        Partner with us to showcase your brand and drive meaningful impact through sponsorship.
        </p> */}
      </div>

    </section>


   
   </>
  )
}

export default WIESpeakers