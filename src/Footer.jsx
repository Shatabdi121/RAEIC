import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
     
    });
  }, []);

  return (
    <>
      {/* --- CALL TO ACTION --- */}
      <section className="bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300 text-slate-900 py-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 mt-8 gap-14">

          {/* LEFT – CONTACT US */}
          <div
            className="bg-white/90 rounded-xl p-5 shadow-lg border border-blue-200"
            data-aos="fade-up"
          >
            <h3 className="text-orange-600 text-lg font-semibold mb-3 tracking-wide">
              CONTACT US
            </h3>

            <div className="space-y-3 text-[13px] leading-snug">
              <p className="flex gap-2">
                <span className="text-orange-500 text-base">📍</span>
                <span>
                  <strong>Dept. of Electrical Engineering</strong><br />
                  Centurion University of Technology and Management (CUTM)<br />
                  Jatani, Bhubaneswar, Odisha – 752050
                </span>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <span className="text-blue-800">sudhansu.samal@cutm.ac.in</span>
              </p>

              <p>
                <strong>Contact:</strong>{" "}
                <span className="text-blue-800">+91-9778118876</span>
              </p>

              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.cutm.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline"
                >
                  cutm.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT – TECHNICAL CO-SPONSORS */}
          <div
            className="bg-white/90 rounded-xl p-5 shadow-lg border border-blue-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-orange-600 text-lg font-semibold mb-3 tracking-wide">
              TECHNICAL CO-SPONSORS
            </h3>

            <ul className="space-y-3 text-[13px]">
              {/* <li className="flex items-center gap-2">
                <span className="text-orange-500 text-sm">✔</span>
                IEEE Power Electronics Society (PELS)
              </li> */}
              {/* <li className="flex items-center gap-2">
                <span className="text-orange-500 text-sm">✔</span>
                IEEE Power & Energy Society (PES)
              </li> */}
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-sm">✔</span>
                IEEE Bhubaneswar Section
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 text-sm">✔</span>
                IEEE Computer Society 
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- FOOTER BOTTOM --- */}
      <footer className="border-t border-slate-200 bg-white">
        <div
          className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center text-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="text-slate-400">
            © 2026 AISIGH-SD Conference. All rights reserved.
          </span>

          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-900 transition">
              Privacy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition">
              Terms
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
