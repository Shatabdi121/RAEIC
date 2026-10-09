import React from 'react';
import Carouselcard from "./Carouselcard";
import speaker1Img from '../src/assets/keynoteSpaker1.png';
import speaker2Img from '../src/assets/keynoteSpeaker2.png';
import speaker3Img from '../src/assets/keynoteSpeaker3.png';
import speaker4Img from '../src/assets/keynoteSpeaker4.png';
import speaker5Img from '../src/assets/keynoteSpeaker5.jpeg';
import newSpeaker from '../src/assets/newSpeaker.png'
import newSpeaker2 from '../src/assets/newSpeaker2.png'
import newSpeaker3 from '../src/assets/newSpeaker3.png'
import newSpeaker4 from '../src/assets/newSpeaker4.png'
// Dynamic accent colors per speaker - each speaker has a unique palette
const speakersData = [
  {
    id: 1,
    name: "Dr. Suman Sourav",
    title: "Aalborg University, Denmark",
    image: newSpeaker,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glow: "group-hover:shadow-amber-500/30",
    borderGlow: "group-hover:border-amber-400"
  },
  {
    id: 2,
    name: "Sangita Satapathy",
    title: "Senior Cloud Platform Engineer, Royal Sutton Coldfield, England, United Kingdom",
    image: newSpeaker2,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glow: "group-hover:shadow-blue-500/30",
    borderGlow: "group-hover:border-blue-400"
  },
  {
    id: 3,
    name: "Dr. Bhabendu Mohanta",
    title: "United Arab Emirates University, UAE",
    image: newSpeaker3,
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glow: "group-hover:shadow-emerald-500/30",
    borderGlow: "group-hover:border-emerald-400"
  },
  {
    id: 4,
    name: "Prof. Ganapati Panda",
    title: "Research Advisor, CGU, Odisha, Former Deputy Director of IIT, Bhubaneswar, India",
    image: speaker4Img,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glow: "group-hover:shadow-amber-500/30",
    borderGlow: "group-hover:border-amber-400"
  },
  {
    id: 5,
    name: "Prof. (Dr.) Keshab K. Parhi",
    title: "University of Minnesota Erwin A. Kelen Chair in Electrical Engineering, United States",
    image: speaker1Img,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glow: "group-hover:shadow-blue-500/30",
    borderGlow: "group-hover:border-blue-400"
  },
  {
    id: 6,
    name: "Dr. Akshaya Kumar Moharana",
    title: "EEPlus, Inc., Engineering consultant, in Irving, Texas, United States",
    image: speaker2Img,
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glow: "group-hover:shadow-emerald-500/30",
    borderGlow: "group-hover:border-emerald-400"
  },
  {
    id: 7,
    name: "Ms. Padmaja Pulivarthy",
    title: "Enterprise Data Systems Architect, Sr Software Engineer, Samsung Semiconductor, United States",
    image: speaker3Img,
    gradient: "from-fuchsia-600 via-pink-600 to-rose-500",
    glow: "group-hover:shadow-fuchsia-500/30",
    borderGlow: "group-hover:border-fuchsia-400"
  },
  {
    id: 8,
    name: "Dr. Rasmita Samantaray",
    title: "Senior Engineer, Hyundai Motor Europe Technical Centre, Germany",
    image: speaker5Img,
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    glow: "group-hover:shadow-violet-500/30",
    borderGlow: "group-hover:border-violet-400"
  },
  {
    id: 9,
    name: "Dr. Suchismita Chinara",
    title: "NIT Rourkela",
    image: newSpeaker4,
    gradient: "from-fuchsia-600 via-pink-600 to-rose-500",
    glow: "group-hover:shadow-fuchsia-500/30",
    borderGlow: "group-hover:border-fuchsia-400"
  }
];

const KeynoteSpeakers = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* ===== HERO / HEADER SECTION ===== */}
      <section className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-3xl shadow-2xl border border-white/20">
        {/* BACKGROUND CAROUSEL */}
        <div className="absolute inset-0 z-0 opacity-30 scale-105 transition-transform duration-1000 ease-out">
          <Carouselcard />
        </div>

        {/* VIBRANT GRADIENT OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-blue-950/85 to-indigo-950/90 backdrop-blur-xs" />

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 gap-3">
          
          {/* BADGE WITH PULSE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-white/20 shadow-inner animate-pulse">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-200 to-cyan-300">
              Featured Experts
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold
            text-transparent bg-clip-text
            bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400"
            style={{
              textShadow:
                "2px 2px 0 rgba(0,0,0,0.5), 4px 4px 0 rgba(0,0,0,0.4)",
            }}
          >
            KEYNOTE SPEAKERS
          </h1>

          {/* SUBTITLE */}
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl font-normal leading-relaxed opacity-90">
            Recognizing impactful research driven by industry expertise, visionary leadership, and cutting-edge innovation.
          </p>
        </div>
      </section>

      {/* ===== SPEAKERS GRID ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
        {speakersData.map((speaker, index) => (
          <div
            key={speaker.id}
            className={`group relative flex flex-col items-center text-center bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${speaker.glow} ${speaker.borderGlow}`}
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* BACKGROUND GRADIENT GLOW ON HOVER */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${speaker.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

            {/* SPEAKER IMAGE CONTAINER */}
            <div className="relative mb-5 flex-shrink-0">
              {/* ANIMATED GRADIENT RING */}
              <div className={`p-1 rounded-full bg-gradient-to-tr ${speaker.gradient} shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105`}>
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-slate-100 border-2 border-white">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* SPEAKER INFO */}
            <div className="flex flex-col flex-1 justify-between space-y-3 mt-2 w-full">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-indigo-900 transition-colors duration-300">
                {speaker.name}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed px-1 line-clamp-4">
                {speaker.title}
              </p>

              {/* BOTTOM COLORED ACCENT BAR */}
              <div className="pt-2 w-full flex justify-center">
                <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${speaker.gradient} opacity-40 group-hover:w-24 group-hover:opacity-100 transition-all duration-500`} />
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default KeynoteSpeakers;