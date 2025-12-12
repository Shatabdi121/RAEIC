import React from 'react'
import { Link } from 'react-router-dom';

const Patrons = () => {
  const speakers = [
    {
      name: "Prof. (Dr.) Mukti Kanta Mishra",
      role: "Founder, President",
      company: "CUTM",
      image:'https://cutm.ac.in/wp-content/uploads/2024/06/leader-img-1.png',
    },
    {
      name: "Prof. Dr. Narsimha Rao",
      role: "Founder, Vice President",
      company: "CUTM",
      image: "https://cutm.ac.in/wp-content/uploads/2024/06/rao-sir.jpg",
    },
    {
      name: "Prof. (Dr.) Supriya Pattanayak",
      role: "Vice-Chancellor",
      company: "CUTM",
      image: "https://cutm.ac.in/wp-content/uploads/2024/06/supriya-mam.jpg",
    },
    {
      name: "Prof. (Dr.) Anita Patra",
      role: "Registrar",
      company: "CUTM",
      image: "https://cutm.ac.in/wp-content/uploads/2024/06/arpita-mam.jpg",
    },
     {
      name: "ABC",
      role: "XYZ",
      company: "CUTM",
      image: "bg-red-200",
    },
      {
      name: "ABC",
      role: "XYZ",
      company: "CUTM",
      image: "bg-red-200",
    },
      {
      name: "ABC",
      role: "XYZ",
      company: "CUTM",
      image: "bg-red-200",
    },
      {
      name: "ABC",
      role: "XYZ",
      company: "CUTM",
      image: "bg-red-200",
    },
  ];
  return (
    <div>
    <section id="speakers" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Chief Patrons
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Hear from the visionaries shaping our industry.
              </p>
            </div>
            <Link
              href="#"
              className="hidden md:block text-blue-600 font-semibold hover:text-blue-700 flex items-center"
            >
              View all speakers <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group"
              >
                <div
                  className={`h-64 ${s.image} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Placeholder for Image */}
                  <span className="text-6xl text-slate-400  font-bold group-hover:scale-110 transition duration-500 transform">
                    <img  src={s.image} alt={s.name.charAt(0)} className="w-full h-full object-cover" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {s.name}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">{s.role}</p>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide mt-3">
                    {s.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <a
              href="#"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              View all speakers →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Patrons
