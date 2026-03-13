import React from "react";
import Carouselcard from "./Carouselcard";
const CallForPapers = () => {
  return (
    <>
      {/* ===== CENTER TEXT SECTION (NO MARQUEE) ===== */}
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
            CALL FOR PAPERS
          </h1>

          {/* <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
        Recognizing impactful research driven by industry expertise and
            innovation
        </p> */}
        </div>
      </section>

      {/* ===== CALL FOR PAPERS / TEXT SECTION ===== */}
      <div className="w-full bg-[#E7ECFF] py-20">
        <div className="max-w-5xl mx-auto px-6 text-slate-700">
          <p className="mb-6 text-lg">
            Conference seeks papers in all aspects of Electrical Power
            Engineering, Communication and Computing Technology. Specifically,
            it covers (but not limited to) the following tracks:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-base font-medium">
            <li>
              Renewable Energy Systems and Sustainable Energy Technologies
            </li>
            <li>
              Power Electronics for Energy Conversion and Power System
              Applications
            </li>
            <li>
              Power System Planning, Stability, Reliability, and Smart Grid
              Operations
            </li>
            <li>Advanced Electrical Machines and Industrial Drive Systems</li>
            <li>
              Energy Storage Technologies, Battery Management, and Fault
              Diagnostics
            </li>
            <li>
              Control Systems, Instrumentation, and Automation in Energy/Power
              Applications
            </li>
            <li>
              Energy Markets, Policy/Regulatory Frameworks, and Decarbonization
              Strategies
            </li>
            <li>
              Artificial Intelligence, Data Analytics, and Computing in Energy
              Systems
            </li>
            <li>
              Signal Processing and Communication Systems in Energy Networks
            </li>
          </ol>

          <h2 className="mt-12 mb-4 text-3xl font-extrabold text-slate-900">
            Submission Guidelines:
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-base">
            <li>
              Authors are required to submit their manuscripts using Microsoft
              CMT by following the provided link:
              <br />
              <a
                href="xxxxxxxcutmxxxxxxxxxxx"
                className="text-orange-600 hover:underline break-all"
              >
                xxxxxxxcutmxxxxxxxxxxx
              </a>
            </li>

            <li>
              Please ensure that your manuscript adheres to the specified length
              requirement of 4–6 pages, following the IEEE Conference format
              guidelines.
              <br />
              Template:
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                className="text-orange-600 hover:no-underline break-all ml-1"
              >
                https://www.ieee.org/conferences/publishing/templates.html
              </a>
            </li>

            <li>
              The submission of manuscripts should be done in PDF format only.
            </li>
            <li>
              All submitted papers will undergo a rigorous review process.
              Acceptance decisions will be made based on criteria including
              quality, originality, technical content, and relevance to the
              conference’s theme.
            </li>
            <li>
              Every paper submitted to XXXCUTMXX-2026 will undergo plagiarism
              detection using anti-plagiarism software prior to review. Papers
              found to not meet the plagiarism policy may be desk-rejected
              without further review.
            </li>
            <li>
              Only registered and presented papers will be forwarded to IEEE for
              inclusion in the IEEE Xplore Digital Library. It is important to
              note that IEEE’s ‘No Show’ policy will be enforced, whereby papers
              that are not presented at the conference will not be eligible for
              inclusion.
            </li>
            <li>
              XXXCUTMXX-2026 strictly prohibits authors from altering their
              details or the sequence of authors once a manuscript has been
              submitted.
            </li>
          </ol>
          <h2 className="mt-12 mb-4 text-3xl font-extrabold text-slate-900">
            Publication:
          </h2>
          <p className="mb-6 text-lg">
            All accepted and presented papers will be published in e-proceedings
            and submitted to the IEEE Xplore Digital Library, indexed by Scopus
            and Google Scholar. Selected papers will also be considered for
            extended publication in the IEEE Transactions on Industry
            Applications or IEEE Industry Applications Magazine.
          </p>
          <h3>CMT acknowledgment:</h3>
          <p className="mb-6 text-lg">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </>
  );
};

export default CallForPapers;
