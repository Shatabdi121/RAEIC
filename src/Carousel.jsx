import React, { useState, useEffect, useRef } from "react";
// import Do from "../public/Assets/Do.jpg"

import cutm from "../src/assets/cutm.jpg";
import cutm3 from "../src/assets/cutm3.jpg";
import cutm4 from "../src/assets/cutm4.png";
const Carousel = () => {
  const slides = [{ image: cutm }, { image: cutm3 }, { image: cutm4 }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0); /* ---------- AUTO SLIDE ---------- */

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []); /* ---------- MANUAL CONTROLS ---------- */

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }; /* ---------- TOUCH / SWIPE ---------- */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div // MODIFICATION: Changed h-[400px] to h-full to fit the h-screen container in Home.js
      className="relative z-10 w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
            {/* SLIDES */}     {" "}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
               {" "}
        {slides.map((item, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
                     {" "}
          </div>
        ))}
             {" "}
      </div>
            {/* PREV BUTTON */}     {" "}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full text-xl z-20"
      >
                      {" "}
      </button> */}
            {/* NEXT BUTTON */}     {" "}
      {/* <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full text-xl z-20"
      >
                     {" "}
      </button> */}
            {/* DOTS */}     {" "}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
               {" "}
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-600" : "bg-white/60"
            }`}
          />
        ))}
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Carousel;
