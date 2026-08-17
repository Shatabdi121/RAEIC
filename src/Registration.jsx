import React from 'react';
import Carouselcard from "./Carouselcard";

const Registration = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
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
            REGISTRATION
          </h1>
        </div>
      </section>

      <div className="min-h-screen bg-[#E7ECFF] p-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSctfMkpONaUEJy2flimqaK1KXtDLm2KwXmWvqm9IBlujyERHw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition">
              Author Registration Form
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebhhzaq8m5mstHLOyQdiE4gA0dfYEXHd1wgngptwdia-t1gQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition">
              Attendee Registration Form
            </button>
          </a>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          {/* Header */}
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Fee Structure for Author / Attendee Registration
          </h2>

          {/* Column Titles */}
          <div className="grid grid-cols-1 md:grid-cols-5 text-sm font-semibold text-slate-600 border-b pb-3 mb-4">
            <span>Category</span>
            <span className="md:text-center">India (IEEE)</span>
            <span className="md:text-center">India (Non-IEEE)</span>
            <span className="md:text-center">Abroad (IEEE)</span>
            <span className="md:text-center">Abroad (Non-IEEE)</span>
          </div>

          {/* Rows */}
          {[
            ["Students", "₹7000", "₹7500", "$250", "$300"],
            ["Academia", "₹8000", "₹9000", "$300", "$350"],
            ["Industry", "₹9000", "₹10000", "$350", "$400"],
            ["Attendee", "₹3000", "₹3500", "$150", "$200"],
          ].map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-5 text-sm text-slate-700 py-3 border-b last:border-b-0"
            >
              <span className="font-medium">{row[0]}</span>
              <span className="md:text-center">{row[1]}</span>
              <span className="md:text-center">{row[2]}</span>
              <span className="md:text-center">{row[3]}</span>
              <span className="md:text-center">{row[4]}</span>
            </div>
          ))}

          {/* GST Note */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              ⚠ GST at <strong>18%</strong> must be paid additionally at the time of payment.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 rounded-2xl shadow-lg border bg-white p-8">
          {/* 💳 Payment Details: QR Code & Payment Link */}
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Payment Details:
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 bg-white border border-slate-300 rounded-lg p-2 flex items-center justify-center shadow-sm">
                <img
                  src="/path-to-your-qr-code.png"
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-slate-600 mt-2">
                Scan to Pay via UPI / QR
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3">
              <h3 className="text-lg font-semibold text-slate-800">
                Online Payment Gateway
              </h3>
              <p className="text-sm text-slate-600">
                You can also proceed directly with payment through our secure payment gateway portal.
              </p>
              <a
                href="https://rzp.io/rzp/cutm-conferenceAISIGH2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-sm"
              >
                Proceed to Pay Online
              </a>
            </div>
          </div>

          {/* 📌 Special Note */}
          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Special Note:
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-base text-slate-700 leading-relaxed">
            <li>
              At least one author of each accepted paper must be registered for the
              conference to have the paper included in the conference proceedings and
              IEEE Xplore.
            </li>

            <li>
              One author (Indian or Foreign, from Academia or Industry) may register a
              second paper with a <strong>50% concession</strong> on the registration
              fee. A separate registration is required for each additional paper beyond
              the first two.
            </li>

            <li>
              Student registration is accepted for papers to be published in IEEE
              Xplore, but the two-paper registration concession does not apply to
              student registrations.
            </li>

            <li>
              Please include <strong>18% GST</strong> on the total registration amount
              while making the payment. For example, if the registration fee is INR xxxxxx,
              the total payable amount including GST is INR xxxxxx.
            </li>

            <li>
              Manuscripts may contain six pages. Up to two (2) additional pages are
              permissible with over-length page charges (₹xxxx/page for Indian authors
              and USD 50/page for abroad). The maximum number of pages allowed is eight
              (8).
            </li>

            <li>
              After completing the payment, authors must fill out the Google Form at{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSctfMkpONaUEJy2flimqaK1KXtDLm2KwXmWvqm9IBlujyERHw/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium no-underline"
              >
                Click here to fill the Author Registration Form
              </a>{" "}
              to complete the registration process.
            </li>

            <li>
              If you are <strong>not an author</strong> and wish to attend the
              conference, please register as an attendee by paying the applicable fee
              and filling out the attendee registration form at{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSebhhzaq8m5mstHLOyQdiE4gA0dfYEXHd1wgngptwdia-t1gQ/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium no-underline"
              >
                Click here to fill the Attendee Registration Form
              </a>
              . Authors who have already registered should not fill out this form.
            </li>

            <li>
              Registration fee is based on the participant’s country / institute.
            </li>

            <li className="font-semibold">
              There is no refund against cancellation.
            </li>
            <li>
              For any problem/query in registration please contact: xxxxxx@gmail.com, +91-xxxxxxxxxx
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Registration;