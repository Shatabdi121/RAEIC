import "../src/styles/Carousel.css"
import React from 'react'
import img1 from "../src/assets/img1.jpg"
import img2 from "../src/assets/img2.webp"
import img3 from "../src/assets/img3.jpg"
import img4 from "../src/assets/img4.jpg"
import img5 from "../src/assets/img5.jpg"
import img6 from "../src/assets/img6.jpg"
// import img7 from "../src/assets/img7.jpg"
// import img8 from "../src/assets/img8.jpg"
// import img9 from "../src/assets/img9.jpg"
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  // img7,
  
  // img9,
  // img8,
];

const Carouselcard = () => {
  return (
    <>

   <div className="absolute inset-0 overflow-hidden flex items-center">
  <div className="flex w-max gap-6 animate-carousel">

    {[...images, ...images].map((img, i) => (
      <div
        key={i}
        className="h-[170px] w-[260px] rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    ))}

  </div>
</div>

    
    </>
  )
}

export default Carouselcard