import React from "react";
import AOS from "aos";
import Carouselcard from "./Carouselcard";
import "aos/dist/aos.css";
import { useEffect } from "react";
import abt1 from "../src/assets/abt1.jpg";
import abt2 from "../src/assets/abt2.webp";
import abt3 from "../src/assets/abt3.webp";
const AboutCutm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
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
            ABOUT CUTM
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
            Shaping lives, empowering communities, and building a sustainable
            future
          </p>
        </div>
      </section>

      <div className="bg-[#E7ECFF] text-gray-800">
        {/* SECTION 1 */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={abt1}
              alt="Centurion University Campus"
              className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 transition duration-700 group-hover:opacity-100"></div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              About the University
            </h2>
            <p className="text-lg leading-relaxed">
              Centurion University is duly recognized as a pioneer in ‘Skill
              Integrated Higher Education”. Its unique model lays specific
              emphasis on creating sustainable livelihoods on a national scale
              in challenging geographies through education that results in
              employability and sparks entrepreneurship. This model has been
              recognized by multiple Governments (Central and State),
              International Organizations such as UNESCO and the World Bank as
              well as Policy Think-tanks such as the Niti Ayog. Recently,
              Centurion University’s School of Vocational Education and Training
              has been recognized as a Center of Excellence by Ministry of Skill
              Development and Entrepreneurship, Government of India. It is the
              only University in India to be recognized as such.
            </p>
          </div>
        </section>

        {/* SECTION 2 (REVERSED) */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div data-aos="fade-right" className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg leading-relaxed">
              The vision of Centurion University is to transform lives through
              holistic education and sustainable development. Its mission
              focuses on inclusive education, research excellence, innovation,
              and empowering communities through technology and governance.
            </p>
          </div>

          {/* Image */}
          <div
            data-aos="fade-left"
            className="order-1 md:order-2 relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={abt2}
              alt="Vision and Mission"
              className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 transition duration-700 group-hover:opacity-100"></div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={abt3}
              alt="Research and Innovation"
              className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 transition duration-700 group-hover:opacity-100"></div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Research, Innovation & Global Impact
            </h2>
            <p className="text-lg leading-relaxed">
              Centurion University actively promotes research, innovation, and
              interdisciplinary collaboration. With strong industry linkages,
              global partnerships, and community-driven initiatives, the
              university contributes to solutions in healthcare, governance,
              sustainability, and emerging technologies.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutCutm;
