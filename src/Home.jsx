

import React, {  useState } from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import lingaraj from "../src/assets/lingaraj.jpg"
import barabati from "../src/assets/barabati.jpg"
import chilika from "../src/assets/chilika.jpg"
import Dhauli from "../src/assets/Dhauli.jpg"
import konark from "../src/assets/konark.jpg"
import puri from "../src/assets/puri.jpg"
import rajarani from "../src/assets/rajarani.jpg"
import zoo from "../src/assets/zoo.jpg"
import map from "../src/assets/map.jpg"
import logo from "../src/assets/logo.jpg"
import cs from "../src/assets/cs.jpeg"
import logo2 from "../src/assets/logo2.jpg"
import logo1 from "../src/assets/logo1.jpg"
import logo6 from "../src/assets/logo6.jpeg"
import logo7 from "../src/assets/logo7.jpeg"
import conf from "../src/assets/conf.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {


  const [activeTab, setActiveTab] = useState("day1");
 const places = [
  {
    name: "Lingaraj Temple",
    distance: "25 KM",
    image: lingaraj,
    history: "An 11th-century temple dedicated to Lord Shiva, a masterpiece of Kalinga architecture.",
  },
  {
    name: "Puri Jagannath",
    distance: "57 KM",
    image: puri,
    history: "One of the Char Dham pilgrimage sites, famous for the annual Rath Yatra festival.",
  },
  {
    name: "Konark Sun Temple",
    distance: "63 KM",
    image: konark,
    history: "A 13th-century UNESCO World Heritage site shaped like a massive stone chariot.",
  },
  {
    name: "Dhauli Shanti Stupa",
    distance: "31 KM",
    image: Dhauli,
    history: "A Buddhist peace pagoda marking Emperor Ashoka’s transformation after the Kalinga war.",
  },
  {
    name: "Nandankanan Zoo",
    distance: "35 KM",
    image: zoo,
    history: "A unique zoological park known for conservation and white tigers.",
  },
  {
    name: "Chilika Lake",
    distance: "112 KM",
    image: chilika,
    history: "Asia’s largest brackish water lagoon, home to migratory birds and dolphins.",
  },
   {
    name: "Barabati Stadium",
    image: barabati,
    distance: "55 KM",
    history: "Barabati Stadium, hosts cricket, football, and cultural events since 1958,"
  },
  {
    name: "Rajarani Temple",
    image: rajarani,
    distance: "4 KM",
    history: "Stunning 11th-century temple built with red and yellow sandstone."
  },
  
];

  // --- MOCK DATA ---
  const schedule = [
  //  {
  //   title: "Call for Papers Opens",
  //   date: "20th January",
  // },
  {
    title: " Submission Deadline",
    date: "30th Aug",
  },
  {
    title: " Acceptance Notification",
    date: "15th Oct",
  },
  // {
  //   title: "Last Submission Deadline",
  //   date: "17th September",
  // },
  {
    title: "Registration",
    date: "10th Nov",
  },
];




  
 useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true,      // animate only once when element comes into view
      offset: 100,     // start animation 100px before element enters viewport
    });
  }, []);
  return (
    <main className="relative w-full overflow-x-hidden">

{/* ================= HERO SECTION ================= */}
 <div className="relative w-full h-screen overflow-hidden">

  {/* CAROUSEL */}
  <div className="absolute inset-0 z-0">
    <Carousel />
  </div>

  {/* LEFT FADE OVERLAY (NO BLUR) */}
  <div className="absolute inset-0 z-10 pointer-events-none">
<div
  className="h-full w-full bg-gradient-to-r"
  style={{
    background: "linear-gradient(to right, #f3f5f0 0%, #f3f5f0 0%, rgba(243,245,240,0) 80%)"
  }}
/>  

  </div>

  {/* HERO CONTENT */}
 <section className="relative z-20 h-full flex items-center">
      <div className="pl-6 sm:pl-10 lg:pl-16 max-w-5xl">

        {/* Badge */}
        <span 
          data-aos="fade-up" 
          className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-4 hover:bg-blue-200 transition-colors duration-300"
        >
          📍 CUTM, BBSR • December 28-30, 2026
        </span>

        {/* Heading */}
        <h1
          data-aos="fade-right"
          className="text-3xl md:text-5xl font-bold leading-tight text-blue-900 
                     hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          AI-Enabled Smart Solutions <br />
          for Industry, Governance, Healthcare <br />
          and Sustainable Development
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-left"
          className="mt-6 font-semibold text-lg text-gray-700 
                     hover:text-gray-900 hover:no-underline transition duration-300 cursor-pointer"
        >
          Centurion University of Technology and Management
        </p>

      </div>
    </section>

 </div>


      
 <section className="bg-[#E7ECFF] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-16">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-blue-200 pt-12 text-center">
    
    <div className="flex justify-center items-center">
      <img
        src={logo1}
        alt="Logo 1"
        className="w-50 h-50 object-contain border-2 border-blue-300 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
      />
    </div>


    <div className="flex justify-center items-center">
      <img
        src={logo6}
        alt="Logo 6"
        className="w-50 h-50 object-contain border-2 border-blue-300 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="flex justify-center items-center">
      <img
        src={logo7}
        alt="Logo 7"
        className="w-50 h-50 object-contain border-2 border-blue-300 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
      />
    </div>

  </div>
</section>


{/* =========================================conference======================================= */}
 <section id="aboutconference" className="w-full bg-[#E7ECFF] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold tracking-wide text-blue-900 mb-6">
            ABOUT THE CONFERENCE
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed">
          The conference provides a global platform to explore AI-enabled smart solutions for industry, governance, healthcare, and sustainability, fostering innovation in smart grids, Industry 4.0, digital healthcare, and sustainable infrastructure through research, collaboration, and technical excellence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Mission Card */}
          <div
            className="relative p-8 max-w-3xl mx-auto rounded-xl bg-gradient-to-r from-blue-50 to-green-50 shadow-md overflow-hidden"
            data-aos="fade-right"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Conference Mission
            </h3>

            <ul className="space-y-4">
              <li data-aos="fade-up" data-aos-delay="100" className="flex items-start gap-4">
                <span className="text-green-600 mt-1 text-2xl">🎯</span>
                <span className="text-slate-700 text-lg md:text-base">
                  Provides an interdisciplinary platform to showcase AI-enabled innovations addressing challenges in industry, governance, healthcare, and sustainable development.
                </span>
              </li>
              <li data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-4">
                <span className="text-blue-600 mt-1 text-2xl">🎯</span>
                <span className="text-slate-700 text-lg md:text-base">
                 Focuses on advanced technologies including smart grids, Industry 4.0, robotics, digital healthcare, and AI-driven personalized solutions
                </span>
              </li>
              <li data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4">
                <span className="text-purple-600 mt-1 text-2xl">🎯</span>
                <span className="text-slate-700 text-lg md:text-base">
                  Encourages collaboration among researchers, industry experts, and policymakers to enhance technical excellence, real-world impact, and regional engagement.
                </span>
              </li>
            </ul>
          </div>

          {/* Image Card */}
          <div
            className="group relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            data-aos="fade-left"
          >
            {/* Image */}
            <img
              src={conf}
              alt="Conference Vision"
              className="w-full h-[380px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Decorative Blur Glow */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#E7ECFF] rounded-full blur-3xl opacity-40"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-3">
                Conference Vision
              </h3>
              <p className="text-white text-lg leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                Advancing AI-driven smart solutions for industry, governance, healthcare, and sustainable development through innovation, resilience, and regional collaboration
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>




    {/* ================= Venue & Heritage Section ================= */}

 <section
  className="relative pt-8 pb-20 bg-cover bg-center"
  style={{ backgroundImage: `url(${map})` }}
 >
  <div className="absolute inset-0 bg-[#E7ECFF]/55 backdrop-blur-[1px]" />

  <div className="relative z-10">
    <div className="text-center max-w-3xl mx-auto mb-12 px-4">
      <h2 className="text-4xl font-bold text-blue-900 tracking-wide">
        Venue & Heritage
      </h2>
      <p className="mt-3 text-gray-700 text-lg">
        Hosted at Centurion University, Bhubaneswar — explore the rich culture and
        heritage of Odisha.
      </p>
    </div>

    <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1800px] mx-auto px-4">

      <div className="md:w-1/3 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-slate-900">
          Conference Venue
        </h3>

        <div className="flex items-start gap-3 mb-8">
          <span className="text-blue-700 text-2xl">📍</span>
          <div>
            <p className="font-medium text-slate-800">
              Centurion University of Technology and Management
            </p>
            <p className="text-gray-600 text-sm">
              Bhubaneswar, Odisha, India
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/@20.168704,85.7014272,14z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
            ➜ Get Directions
          </button>
        </a>
      </div>

      <div className="md:w-2/3 rounded-3xl p-8 bg-white/80 backdrop-blur-md shadow-xl">
        <h3 className="text-2xl font-semibold mb-8 text-slate-900">
          Experience the Culture & Heritage
        </h3>

        {/* ✅ FIXED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {places.map((place, index) => (
            <div
              key={index}
              className="relative w-full aspect-[6/5] cursor-pointer perspective-1000"
            >
              <div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "rotateY(180deg) scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "rotateY(0deg) scale(1)")
                }
                onClick={(e) =>
                  (e.currentTarget.style.transform =
                    e.currentTarget.style.transform === "rotateY(180deg) scale(1.05)"
                      ? "rotateY(0deg) scale(1)"
                      : "rotateY(180deg) scale(1.05)")
                }
              >
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-lg">{place.name}</h4>
                    <p className="text-sm">{place.distance}</p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl bg-blue-900 text-white p-6 flex items-center justify-center text-center shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-sm leading-relaxed">{place.history}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  </div>
</section>





{/* ================= End Venue & Heritage ================= */}


      
    {/* ================= SCHEDULE SECTION ================= */}
<section id="schedule" className="py-16 bg-[#E7ECFF] border-t border-blue-200 overflow-x-hidden">
  <div className="max-w-4xl mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Important Dates
      </h2>
      <p className="text-slate-600 mt-2 text-sm sm:text-base">
        Paper submission & acceptance milestones
      </p>
    </div>

    <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div class="w-full max-max-w-md bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl shadow-lg border border-gray-400 overflow-hidden">
    
    <div class="pt-8 pb-4 text-center">
      <h2 class="text-3xl font-bold text-orange-600 uppercase tracking-tight">
        Keynote Speakers
      </h2>
      
      <div class="flex items-center justify-center my-2">
        <div class="h-0.5 w-16 bg-orange-800"></div>
        <div class="h-2 w-8 bg-orange-800 mx-1"></div>
        <div class="h-0.5 w-16 bg-orange-800"></div>
      </div>

      <h3 class="text-4xl font-bold text-orange-600 mt-4 italic">
        Time Line
      </h3>

      <div class="flex items-center justify-center mt-2 mb-6">
        <div class="h-0.5 w-16 bg-orange-800"></div>
        <div class="h-2 w-8 bg-orange-800 mx-1"></div>
        <div class="h-0.5 w-16 bg-orange-800"></div>
      </div>
    </div>

    <div class="px-6 pb-12">
      <div class="border border-gray-500 overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-transparent">
              <th class="py-3 px-4 text-xl font-bold text-slate-800 border-r border-b border-gray-500">Event</th>
              <th class="py-3 px-4 text-xl font-bold text-slate-800 border-b border-gray-500">Date</th>
            </tr>
          </thead>
          <tbody class="text-slate-700 font-medium">
            <tr>
              <td class="py-4 px-4 border-r border-b border-gray-500">Paper Submission Ends</td>
              <td class="py-2 px-4 border-b border-gray-500">
                <div class="text-gray-500 line-through decoration-slate-600">15/10/2026</div>
                <div class="font-bold text-black text-lg">05/11/2025</div>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-4 border-r border-b border-gray-500">Notification of Acceptance</td>
              <td class="py-4 px-4 border-b border-gray-500">16/11/2026</td>
            </tr>
            <tr>
              <td class="py-4 px-4 border-r border-b border-gray-500">Camera-Ready Submission</td>
              <td class="py-4 px-4 border-b border-gray-500">06/12/2026</td>
            </tr>
            <tr>
              <td class="py-4 px-4 border-r border-b border-gray-500">Last Date of Registration</td>
              <td class="py-4 px-4 border-b border-gray-500">10/12/2026</td>
            </tr>
            <tr>
              <td class="py-4 px-4 border-r border-gray-500">Date of Conference</td>
              <td class="py-4 px-4">27/12/2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
</section>

    </main>
  );
};

export default Home;
