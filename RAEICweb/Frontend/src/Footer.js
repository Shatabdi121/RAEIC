import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
     {/* --- CALL TO ACTION --- */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to join us?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Tickets are selling fast. Secure your spot today to get access to all workshops, keynotes, and networking events.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition shadow-xl">
            Get Your Ticket
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            © 2026 AISIGHS-SD Conference. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition">Terms</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition">Contact</a>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
