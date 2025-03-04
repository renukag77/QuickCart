import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 container mx-auto px-4 bg-cream/10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="mb-2">
            <span className="text-lg font-medium">45% MEGA SALE OFFER</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Unique &amp; Stylish <br />
            Furniture
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit quam
            scelerisque a tincidunt urna. Nisl, quam orci malesuada
          </p>
          
          <button className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
        
        <div className="md:w-1/2 relative min-h-[300px]">
          {/* Cabinet with green door */}
          <div className="absolute left-1/4 transform -translate-x-1/2 bottom-10">
            <div className="h-36 w-44 flex rounded-sm overflow-hidden bg-transparent">
              <div className="w-2/3 bg-cream/30 flex flex-col">
                <div className="h-1/3 border-b border-cream/50"></div>
                <div className="h-1/3 border-b border-cream/50"></div>
                <div className="h-1/3"></div>
              </div>
              <div className="w-1/3 bg-[#4B6B6E]"></div>
            </div>
            {/* Legs */}
            <div className="flex justify-between px-2">
              <div className="h-2 w-0.5 bg-cream"></div>
              <div className="h-2 w-0.5 bg-cream"></div>
              <div className="h-2 w-0.5 bg-cream"></div>
              <div className="h-2 w-0.5 bg-cream"></div>
            </div>
          </div>
          
          {/* White chair */}
          <div className="absolute right-1/4 bottom-10">
            <div className="bg-cream/10 w-40 h-40 rounded-t-full"></div>
            {/* Legs */}
            <div className="flex justify-between px-6 relative -mt-1">
              <div className="h-3 w-0.5 bg-cream transform rotate-6"></div>
              <div className="h-3 w-0.5 bg-cream"></div>
              <div className="h-3 w-0.5 bg-cream transform -rotate-6"></div>
            </div>
          </div>
          
          {/* Ottoman */}
          <div className="absolute right-1/3 bottom-0">
            <div className="bg-cream/10 w-20 h-12 rounded-full"></div>
            {/* Legs */}
            <div className="flex justify-between px-4">
              <div className="h-2 w-0.5 bg-cream"></div>
              <div className="h-2 w-0.5 bg-cream"></div>
              <div className="h-2 w-0.5 bg-cream"></div>
            </div>
          </div>
          
          {/* Floor lamp */}
          <div className="absolute right-10 bottom-0">
            <div className="w-0.5 h-56 bg-cream"></div>
            <div className="absolute -top-4 -left-3 w-8 h-8 rounded-full bg-cream/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;