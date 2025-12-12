import React, { useState, useEffect, Fragment } from 'react';

const ErrorComp = () => {
  // --- COUNTDOWN LOGIC ---
  // Target date: 30 days from now (Example)
  const [expiryDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30); 
    return date;
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +expiryDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  // -----------------------

  // Light Theme Time Block
  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white rounded-xl p-4 w-20 sm:w-24 border border-gray-200 shadow-sm md:shadow-md">
      <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50 font-sans">
      
      {/* Background Image with LIGHT Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountains Background" 
          className="w-full h-full object-cover"
        />
        {/* White gradient overlay to fade image into the background color */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white/90 to-white/70"></div>
      </div>

      {/* Decorative Pastel Gradient Blobs */}
      {/* Requires the tailwind.config.js animation setup added previously */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-12 sm:mt-0">
        
        {/* Brand / Badge Area */}
        <div className="mb-8">
          <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-200 shadow-sm">
            <span className="animate-pulse mr-2 h-2 w-2 bg-blue-500 rounded-full"></span>
            Coming Soon 2026
          </span>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
          Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">awesome</span> is<br className="hidden md:block" /> in the works.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Get ready to redefine your experience. Sign up below to receive updates and be the first to know when we launch.
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-14">
           {timeLeft.days !== undefined ? (
             <Fragment>
               <TimeBlock value={timeLeft.days} label="Days" />
               <TimeBlock value={timeLeft.hours} label="Hours" />
               <TimeBlock value={timeLeft.minutes} label="Mins" />
               <TimeBlock value={timeLeft.seconds} label="Secs" />
             </Fragment>
           ) : (
             <span className="text-3xl text-blue-600 font-bold">We have launched!</span>
           )}
        </div>

        {/* Light Email Capture Form */}
        <div className="max-w-md mx-auto relative">
          <form className="flex flex-col sm:flex-row gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 py-4 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Notify Me
            </button>
          </form>
           {/* Subtle glow behind the form container */}
          <div className="absolute inset-0 -z-10 bg-blue-500/5 blur-xl rounded-xl transform scale-105"></div>

          <p className="text-sm text-gray-500 mt-4 font-medium">
            Join 5,000+ others waiting. No spam.
          </p>
        </div>
        
      </div>

    </div>
  );
};

export default ErrorComp;