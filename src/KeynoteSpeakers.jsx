import React from 'react';
import Carouselcard from "./Carouselcard";
import speaker1Img from '../src/assets/keynoteSpaker1.png';
import speaker2Img from '../src/assets/keynoteSpeaker2.png';
import speaker3Img from '../src/assets/keynoteSpeaker3.png';
import speaker4Img from '../src/assets/keynoteSpeaker4.png';

// Sample Data for 4 Keynote Speakers
const speakersData = [
  {
    id: 1,
    name: "Prof. (Dr.) Keshab K. Padhi",
    title: "University of Minnesota Erwin A. Kelen Chair in Electrical Engineering, United States",
    image: speaker1Img,
  },
  {
    id: 2,
    name: "Dr. Akshaya Kumar Moharana",
    title: "EEPlus, Inc., Engineering consultant, in Irving, Texas, United States",
    image: speaker2Img,
  },
  {
    id: 3,
    name: "Ms. PADMAJA PULIVARTHY",
    title: "Enterprise Data Systems Architect, Sr Software Engineer , Samsung Semiconductor, United States",
    image: speaker3Img,
  },
  {
    id: 4,
    name: "Prof. Ganapati Panda",
    title: "Research Advisor, CGU, Odisha, Former Deputy Director of IIT, Bhubaneswar, India",
    image: speaker4Img,
  }
];

const KeynoteSpeakers = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-12">
      
      {/* ===== HERO / HEADER SECTION ===== */}
      <section className="relative w-full mt-10 h-[200px] sm:h-[220px] overflow-hidden rounded-2xl shadow-lg">
        {/* BACKGROUND CAROUSEL */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Carouselcard />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/85 via-blue-800/80 to-blue-900/85" />

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-2 sm:gap-3">
          <span className="px-3 py-1 bg-white/10 text-blue-100 text-xs font-semibold tracking-widest uppercase rounded-full border border-white/20">
            Featured Experts
          </span>
          <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400"
          style={{
            textShadow:
              "2px 2px 0 rgba(0,0,0,0.5), 4px 4px 0 rgba(0,0,0,0.4)",
          }}
        >
        KEYNOTE SPEAKER
        </h1>
          <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-xl opacity-90 font-light">
            Recognizing impactful research driven by industry expertise and innovation
          </p>
        </div>
      </section>

      {/* ===== ALTERNATING VERTICAL LIGHT SPEAKERS SECTION ===== */}
      <section className="space-y-6 sm:space-y-8">
        {speakersData.map((speaker, index) => {
          const isEven = index % 2 === 1; // Alternating layout direction on desktop

          return (
            <div
              key={speaker.id}
              className="group relative bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-500/10"
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Speaker Image Container */}
                <div className="relative flex-shrink-0">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all duration-300 shadow-sm">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Speaker Info */}
                <div
                  className={`flex-1 text-center ${
                    isEven ? "md:text-right" : "md:text-left"
                  } space-y-2`}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
                    {speaker.name}
                  </h2>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};

export default KeynoteSpeakers;