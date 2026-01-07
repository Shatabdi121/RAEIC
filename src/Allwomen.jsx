import React from 'react'
import Carouselcard from "./Carouselcard";
const Allwomen = () => {
  return (

    <>
    {/* ================= HERO WITH BACKGROUND CAROUSEL ================= */}
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
         ALL WOMEN AUTHORED PAPER AWARD
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
         Celebrating excellence and leadership by women in research and innovation
        </p>
      </div>

    </section>


<div className="bg-[#E7ECFF] py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Title */}
   
    {/* Content Card */}
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-left space-y-6">

      <div className="flex items-start gap-4">
        <span className="text-blue-600 text-2xl font-bold">👩‍🔬</span>
        <p className="text-lg leading-relaxed text-gray-800">
          From all accepted papers, <strong>one exceptional paper authored
          entirely by women</strong> will be selected for the
          <strong> All-Women Authored Paper Award</strong>.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-blue-600 text-2xl font-bold">📄</span>
        <p className="text-lg leading-relaxed text-gray-800">
          Eligibility requires that <strong>all contributing authors are women</strong>,
          highlighting collaborative excellence and inclusive research leadership.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-blue-600 text-2xl font-bold">⭐</span>
        <p className="text-lg leading-relaxed text-gray-800">
          The selection will be based on the <strong>technical quality of the work</strong>,
          the <strong>clarity and effectiveness of the presentation</strong>, and
          the <strong>engagement demonstrated during the question-and-answer session</strong>.
        </p>
      </div>

    </div>
  </div>
</div>

</>

  )
}

export default Allwomen