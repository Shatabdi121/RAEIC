import React, { Fragment } from 'react'
import { useState } from 'react';

const Home = () => {
    const [activeTab, setActiveTab] = useState("day1");

  // --- MOCK DATA ---
 

  const schedule = {
    day1: [
      {
        time: "09:00 AM",
        title: "Opening Remarks",
        speaker: "CEO",
        room: "Grand Ballrom",
      },
      {
        time: "10:30 AM",
        title: "The Future of Clean Tech",
        speaker: "Dr. Elena Fisher",
        room: "Room A",
      },
      {
        time: "01:00 PM",
        title: "Networking Lunch",
        speaker: "-",
        room: "Garden Terrace",
      },
    ],
    day2: [
      {
        time: "09:00 AM",
        title: "Morning Yoga & Coffee",
        speaker: "Community Team",
        room: "Lawn",
      },
      {
        time: "11:00 AM",
        title: "Panel: Sustainable Growth",
        speaker: "Marcus & Lara",
        room: "Grand Ballroom",
      },
      {
        time: "03:00 PM",
        title: "Closing Keynote",
        speaker: "Nathan Drake",
        room: "Room A",
      },
    ],
  };
  return (
    <Fragment>
    {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide mb-6">
            📍 CUTM,BBSR &bull; December 17-19, 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Connect with the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              AI-Enabled  Smart Solutions for Industry, Governanace, Healthcare and Sustainable Development
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10 leading-relaxed">
           Centurion University of Tehnology and Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              Register Now
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition">
              View Agenda
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">50+</div>
            <div className="text-slate-500 mt-1">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">2000+</div>
            <div className="text-slate-500 mt-1">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">30</div>
            <div className="text-slate-500 mt-1">Workshops</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900">12</div>
            <div className="text-slate-500 mt-1">Countries</div>
          </div>
        </div>
      </section>
      {/* --- SCHEDULE SECTION --- */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Event Schedule
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setActiveTab("day1")}
                className={`px-8 py-3 rounded-md text-sm font-bold transition ${
                  activeTab === "day1"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Day 01
              </button>
              <button
                onClick={() => setActiveTab("day2")}
                className={`px-8 py-3 rounded-md text-sm font-bold transition ${
                  activeTab === "day2"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Day 02
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {schedule[activeTab].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row group">
                {/* Time Column */}
                <div className="md:w-32 flex-shrink-0 mb-2 md:mb-0">
                  <span className="text-slate-500 font-medium text-sm">
                    {item.time}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-grow p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-slate-600 text-sm flex items-center gap-1">
                          👤 {item.speaker}
                        </span>
                        <span className="text-slate-400 text-xs">•</span>
                        <span className="text-slate-500 text-sm bg-slate-100 px-2 py-0.5 rounded">
                          {item.room}
                        </span>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition">
                      <span className="text-slate-400 group-hover:text-blue-600">
                        ↓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Home
