import { Fragment } from 'react/jsx-runtime'
import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Fragment>
          {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <span className="font-bold text-xl tracking-tight text-slate-900">AISIGHS<span className="text-blue-600">-SD</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/callForPapers" className="text-slate-600 hover:text-blue-600 font-medium transition">Call for Papers</Link>
              <Link to="/specialSession" className="text-slate-600 hover:text-blue-600 font-medium transition">Special Session</Link>
              <Link to="/guidelines" className="text-slate-600 hover:text-blue-600 font-medium transition">Guidelines</Link>
              <Link to="/attend" className="text-slate-600 hover:text-blue-600 font-medium transition">Attend</Link>
              <Link to="/patrons" className="text-slate-600 hover:text-blue-600 font-medium transition">Comittees</Link>
              <Link to="/sightSeeing" className="text-slate-600 hover:text-blue-600 font-medium transition">Sight Seeing</Link>

              <Link to="/registration"><button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition duration-300">
                Register Now
              </button></Link>
              <button className="border-1 bg-white-600 text-blue-900 px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 transition duration-300">
                Submit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/callForPapers" className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Call for Papers</Link>
              <Link to="/specialSession" className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Special Session</Link>
              <Link to="/guidelines" className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Guidelines</Link>
              <Link to="/attend" className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Attend</Link>
              <Link to="/comittees" className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Comittees</Link>
              <Link to="/sightSeeing" className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Sight Seeing</Link>
              <Link to="/registration"><button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold">
                Register Now
              </button></Link>
            </div>
          </div>
        )}
      </nav>
</Fragment>
  )
}

export default Header
