
import React from 'react';
import img from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative h-64">
      <img src={img} className="w-full h-full object-cover" alt="Banner" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-3xl italic">
        <div className="mt-18">
          <h2 className="text-amber-100">
            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
