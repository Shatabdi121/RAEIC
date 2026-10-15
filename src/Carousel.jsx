import React, { useEffect, useRef, useState } from "react";
import cutm from "../src/assets/cutm-optimized.jpg";
import cutm3 from "../src/assets/cutm3-optimized.jpg";
import cutm4 from "../src/assets/cutm4-optimized.jpg";

const slides = [{ image: cutm }, { image: cutm3 }, { image: cutm4 }];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) nextSlide();
    if (difference < -50) prevSlide();
  };

  return (
    <div
      className="relative z-10 w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-600" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
