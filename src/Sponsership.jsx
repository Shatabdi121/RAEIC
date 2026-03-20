import React from "react";
import Carouselcard from "./Carouselcard";
const Sponsership = () => {
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
            SPONSERSHIP
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
            Partner with us to showcase your brand and drive meaningful impact
            through sponsorship.
          </p>
        </div>
      </section>

      <div className="px-6 py-10 md:px-8 lg:px-15 bg-[#E7ECFF]">
        <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-lg bg-white">
          <table className="min-w-full text-center border-collapse">
            {/* TOP PRICE ROW */}
            <thead>
              <tr className="bg-blue-50 text-blue-900 font-semibold">
                <th className="border border-gray-300 px-4 py-4"></th>
                <th className="border border-gray-300 px-4 py-4">₹2 Lakh*</th>
                <th className="border border-gray-300 px-4 py-4">₹1.5 Lakh*</th>
                <th className="border border-gray-300 px-4 py-4">₹1 Lakh*</th>
                <th className="border border-gray-300 px-4 py-4">
                  ₹0.75 Lakh*
                </th>
                <th className="border border-gray-300 px-4 py-4">₹0.5 Lakh*</th>
                <th className="border border-gray-300 px-4 py-4">
                  ₹0.25 Lakh*
                </th>
              </tr>

              {/* CATEGORY ROW */}
              <tr className="bg-gray-100 text-gray-800 font-semibold">
                <th className="border border-gray-300 px-4 py-4">
                  Particulars
                </th>
                <th className="border border-gray-300 px-4 py-4">
                  Title Sponsor
                </th>
                <th className="border border-gray-300 px-4 py-4">Diamond</th>
                <th className="border border-gray-300 px-4 py-4">Platinum</th>
                <th className="border border-gray-300 px-4 py-4">Gold</th>
                <th className="border border-gray-300 px-4 py-4">Silver</th>
                <th className="border border-gray-300 px-4 py-4">Bronze</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-4 font-medium">
                  Number of free attendee registrations
                </td>
                <td className="border border-gray-300 px-4 py-4">6</td>
                <td className="border border-gray-300 px-4 py-4">5</td>
                <td className="border border-gray-300 px-4 py-4">4</td>
                <td className="border border-gray-300 px-4 py-4">3</td>
                <td className="border border-gray-300 px-4 py-4">2</td>
                <td className="border border-gray-300 px-4 py-4">1</td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-4 font-medium">
                  Invitation to expert talk
                </td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✖</td>
                <td className="border border-gray-300 px-4 py-4">✖</td>
                <td className="border border-gray-300 px-4 py-4">✖</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-4 font-medium">
                  Space for sponsor logos (website, posters, flyers, banners,
                  etc.)
                </td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-4 font-medium">
                  Exhibition Booth details
                </td>
                <td className="border border-gray-300 px-4 py-4">6m × 6m</td>
                <td className="border border-gray-300 px-4 py-4">6m × 3m</td>
                <td className="border border-gray-300 px-4 py-4">3m × 3m</td>
                <td className="border border-gray-300 px-4 py-4">3m × 3m</td>
                <td className="border border-gray-300 px-4 py-4">2m × 3m</td>
                <td className="border border-gray-300 px-4 py-4">✖</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-4 font-medium">
                  Sponsor brochure/flyer in conference kit
                </td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✔</td>
                <td className="border border-gray-300 px-4 py-4">✖</td>
                <td className="border border-gray-300 px-4 py-4">✖</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-4 text-sm text-gray-600">* GST exclusive rates</p>
      </div>
      <div className="mt-0 pb-10 px-6 md:px-10 lg:px-20 bg-[#E7ECFF]">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          For Sponsorship, contact Sponsorship Chairs:
        </h2>

        <ul className="space-y-2 text-slate-700 text-sm md:text-base">
          <li>
            <span className="font-medium">Prof. Raj Kumar Mohanta</span> –{" "}
          </li>
          <li>
            <span className="font-medium">
              Assitant Professor, HOD of Computer Science and Engineering
            </span>
          </li>
          <li>
            <a
              href="mailto:rajkumar.mohanta@cutm.ac.in"
              className="text-blue-600 hover:underline"
            >
              rajkumar.mohanta@cutm.ac.in
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sponsership;
