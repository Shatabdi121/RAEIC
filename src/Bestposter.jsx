import React from "react";


import Carouselcard from "./Carouselcard";
const Bestposter = () => {
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
          BEST POSTER AWARD
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
          Celebrating excellence in poster research and scholarly communication
        </p>
      </div>

    </section>





    <div className="bg-[#E7ECFF] py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">

   
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-left space-y-6">

      <div className="flex items-start gap-4">
        <span className="text-blue-600 text-2xl font-bold">🖼️</span>
        <p className="text-lg leading-relaxed text-gray-800">
          All accepted papers scheduled for <strong>poster presentations</strong>
          will be considered for the <strong>AISIGH-SD 2026 Best Poster Award</strong>.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-blue-600 text-2xl font-bold">📊</span>
        <p className="text-lg leading-relaxed text-gray-800">
          In each poster session, one poster will be selected based on the
          <strong> originality and quality of the research</strong>,
          the <strong>clarity and visual effectiveness</strong> of the poster,
          and the <strong>level of engagement during the discussion</strong>.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-blue-600 text-2xl font-bold">🏅</span>
        <p className="text-lg leading-relaxed text-gray-800">
          The recipients of the Best Poster Award will be
          <strong> announced during the Valedictory Session</strong>
          of AISIGH-SD 2026.
        </p>
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default Bestposter;
