import React from 'react'
import Carouselcard from "./Carouselcard";
const Accomodation = () => {
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
          ACCOMODATION
        </h1>

        {/* <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
        Shaping lives, empowering communities, and building a sustainable future
        </p> */}
      </div>

    </section>


<div className="w-full bg-[#E7ECFF] py-20">
<div className="max-w-6xl mx-auto  px-6 md:px-12 py-16 bg-[#E7ECFF] text-gray-700">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Hostel Accommodation for Registered Student Participants
      </h2>

      {/* Description */}
      <p className="text-lg leading-relaxed mb-8">
        Registered student participants may opt for shared accommodation in the
        hostel on a payment basis. Those interested are required to fill out the
        Google Form provided below. Hostel seats will be allocated on a
        <span className="font-semibold"> first-come, first-served basis</span>.
        The <span className="font-semibold">last date</span> to submit interest
        for hostel accommodation is{" "}
        <span className="font-semibold">28th January 2026</span>; requests
        received after this date will not be considered.
      </p>

      {/* Form Link */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        Form Link
      </h3>
      <p className="mb-8 text-gray-500">
        To be updated
      </p>

      {/* Important Notes */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Important Notes
      </h3>

      <ul className="list-disc list-inside space-y-3 text-lg mb-10">
        <li>
          Family members or acquaintances who are not registered for the
          conference will not be permitted to stay in the hostel.
        </li>
        <li>
          The accommodation charges are{" "}
          <span className="font-semibold">INR 300/- per night</span>, payable in
          advance for the entire duration of the stay at the time of arrival.
        </li>
        <li>
          Working lunch will be hosted by the organizers for all registered
          participants during the conference (
          <span className="font-semibold">20–21 February 2026</span>).
        </li>
        <li>
          Registered participants must strictly adhere to the CUTM hostel norms
          during their stay.
        </li>
      </ul>

      {/* Nearby Hotels */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        Nearby Hotels
      </h3>
      <p className="text-lg text-gray-500">
        To be updated soon
      </p>

    </div>
</div>

</>
  )
}

export default Accomodation