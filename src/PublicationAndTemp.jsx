import React from 'react'
import Carouselcard from "./Carouselcard";
const PublicationAndTemp = () => {
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
          PUBLICATION AND TEMPLATE
        </h1>

        {/* <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
       Acknowledging the invaluable contributions of our committee in fostering knowledge, collaboration
        </p> */}
      </div>

    </section>

    <div className="w-full bg-[#E7ECFF] py-20">
      <div className="max-w-5xl mx-auto px-6 text-slate-700">

        {/* ===== Publication Section ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Publication
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            All accepted and presented papers will be published in
            <span className="font-semibold"> e-proceedings</span> and submitted to
            the <span className="font-semibold">IEEE Xplore Digital Library</span>,
            indexed by <span className="font-semibold">Scopus</span> and
            <span className="font-semibold"> Google Scholar</span>.  
            <br /><br />
            
          </p>
        </div>

        {/* ===== Templates Section ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Templates
          </h2>

          <div className="space-y-4 text-lg text-slate-700">

            <p>
              <span className="font-semibold">
                Paper Submission Template:
              </span>{" "}
              <a
                href="https://www.ieee.org/conferences/publishing/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline break-all"
              >
                https://www.ieee.org/conferences/publishing/templates
              </a>
            </p>

            <p>
              <span className="font-semibold">
                PPT Template:
              </span>{" "}
              <span className="text-slate-500">
                (Will be updated soon)
              </span>
            </p>

            <p>
              <span className="font-semibold">
                A0 Size Poster Template:
              </span>{" "}
              <span className="text-slate-500">
                (Will be updated soon)
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
    </>
  );

}
export default PublicationAndTemp;