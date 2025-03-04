import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  // Cream color from your background component
  const creamColor = "#EFDFBB";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative h-screen overflow-hidden" style={{ backgroundColor: creamColor }}>
      <div className="container mx-auto px-4 h-full flex items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 z-10 transition-all duration-700 transform"
          style={{
            opacity: 1,
            transform: `translateX(${currentSlide === 0 ? '0' : '-100px'})`
          }}>
          <p className="text-gray-700 mb-2 animate-fadeIn">45% MEGA SALE OFFER</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700"
             style={{
               opacity: currentSlide === 0 ? 1 : 0.3,
               transform: `translateY(${currentSlide === 0 ? '0' : '20px'})`
             }}>
            Unique &amp; Stylish <br />
            Furniture
          </h1>
          
          <p className="text-gray-700 mb-8 max-w-md transition-all duration-700"
             style={{
               opacity: currentSlide === 0 ? 1 : 0.3,
               transform: `translateY(${currentSlide === 0 ? '0' : '20px'})`
             }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit quam
            scelerisque a tincidunt urna. Nisl, quam orci malesuada
          </p>
          
          <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-all duration-300 transform hover:translate-y-1">
            SHOP NOW
          </button>
        </div>
        
        {/* Furniture Display Area */}
        <div className="hidden md:block w-1/2 h-full relative">
          {/* Slide 1 */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            {/* Cabinet */}
            <div className="absolute left-0 bottom-20 transition-all duration-700 transform"
              style={{
                opacity: currentSlide === 0 ? 1 : 0,
                transform: `translateY(${currentSlide === 0 ? '0' : '50px'})`
              }}>
              <div className="h-32 w-40 flex rounded-sm overflow-hidden bg-transparent shadow-md">
                <div className="w-2/3 bg-amber-50 flex flex-col">
                  <div className="h-1/2 border-b border-amber-100"></div>
                  <div className="h-1/2"></div>
                </div>
                <div className="w-1/3 bg-teal-700"></div>
              </div>
              <div className="flex justify-between mt-1 px-4">
                <div className="h-6 w-1 bg-amber-100"></div>
                <div className="h-6 w-1 bg-amber-100"></div>
                <div className="h-6 w-1 bg-amber-100"></div>
                <div className="h-6 w-1 bg-amber-100"></div>
              </div>
            </div>
            
            {/* Chair */}
            <div className="absolute left-1/2 bottom-16 transition-all duration-700 delay-300 transform"
              style={{
                opacity: currentSlide === 0 ? 1 : 0,
                transform: `translateY(${currentSlide === 0 ? '0' : '50px'})`
              }}>
              <div className="w-36 h-36 bg-white rounded-t-full relative overflow-hidden shadow-md">
                <div className="absolute inset-2 rounded-t-full bg-gray-50"></div>
              </div>
              <div className="flex justify-between px-6">
                <div className="h-8 w-1 bg-amber-50 transform rotate-12"></div>
                <div className="h-8 w-1 bg-amber-50"></div>
                <div className="h-8 w-1 bg-amber-50 transform -rotate-12"></div>
              </div>
            </div>
            
            {/* Ottoman */}
            <div className="absolute left-1/3 bottom-10 transition-all duration-700 delay-500 transform"
              style={{
                opacity: currentSlide === 0 ? 1 : 0,
                transform: `translateY(${currentSlide === 0 ? '0' : '50px'})`
              }}>
              <div className="w-24 h-12 bg-white rounded-full shadow-md">
                <div className="absolute inset-1 rounded-full bg-gray-50"></div>
              </div>
              <div className="flex justify-between px-6">
                <div className="h-6 w-1 bg-amber-50 transform rotate-6"></div>
                <div className="h-6 w-1 bg-amber-50"></div>
                <div className="h-6 w-1 bg-amber-50 transform -rotate-6"></div>
              </div>
            </div>
            
            {/* Lamp */}
            <div className="absolute right-8 bottom-0 transition-all duration-700 delay-700 transform"
              style={{
                opacity: currentSlide === 0 ? 1 : 0,
                transform: `translateY(${currentSlide === 0 ? '0' : '50px'})`
              }}>
              <div className="w-1 h-48 bg-amber-300"></div>
              <div className="absolute -top-6 -left-5 w-12 h-12 rounded-full bg-amber-50 shadow-md"></div>
            </div>
          </div>
          
          {/* Slide 2 (similar furniture in different position) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            {/* Different arrangement of similar furniture */}
            {/* Cabinet */}
            <div className="absolute right-0 bottom-16">
              <div className="h-36 w-44 flex rounded-sm overflow-hidden bg-transparent shadow-md">
                <div className="w-2/3 bg-amber-50 flex flex-col">
                  <div className="h-1/3 border-b border-amber-100"></div>
                  <div className="h-1/3 border-b border-amber-100"></div>
                  <div className="h-1/3"></div>
                </div>
                <div className="w-1/3 bg-teal-600"></div>
              </div>
              <div className="flex justify-between mt-1 px-2">
                <div className="h-6 w-1 bg-amber-100"></div>
                <div className="h-6 w-1 bg-amber-100"></div>
                <div className="h-6 w-1 bg-amber-100"></div>
                <div className="h-6 w-1 bg-amber-100"></div>
              </div>
            </div>
            
            {/* Chair */}
            <div className="absolute left-0 bottom-24">
              <div className="w-40 h-40 bg-white rounded-t-full relative overflow-hidden shadow-md">
                <div className="absolute inset-2 rounded-t-full bg-gray-50"></div>
              </div>
              <div className="flex justify-between px-8">
                <div className="h-8 w-1 bg-amber-50 transform rotate-12"></div>
                <div className="h-8 w-1 bg-amber-50"></div>
                <div className="h-8 w-1 bg-amber-50 transform -rotate-12"></div>
              </div>
            </div>
          </div>
          
          {/* Slide 3 (another variation) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${currentSlide === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            {/* Chair centered */}
            <div className="absolute left-1/4 bottom-20">
              <div className="w-44 h-44 bg-white rounded-t-full relative overflow-hidden shadow-md">
                <div className="absolute inset-2 rounded-t-full bg-gray-50"></div>
              </div>
              <div className="flex justify-between px-10">
                <div className="h-8 w-1 bg-amber-50 transform rotate-12"></div>
                <div className="h-8 w-1 bg-amber-50"></div>
                <div className="h-8 w-1 bg-amber-50 transform -rotate-12"></div>
              </div>
            </div>
            
            {/* Ottoman */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
              <div className="w-28 h-14 bg-white rounded-full shadow-md">
                <div className="absolute inset-1 rounded-full bg-gray-50"></div>
              </div>
              <div className="flex justify-between px-8">
                <div className="h-6 w-1 bg-amber-50 transform rotate-6"></div>
                <div className="h-6 w-1 bg-amber-50"></div>
                <div className="h-6 w-1 bg-amber-50 transform -rotate-6"></div>
              </div>
            </div>
            
            {/* Lamp */}
            <div className="absolute right-20 bottom-0">
              <div className="w-1 h-64 bg-amber-300"></div>
              <div className="absolute -top-6 -left-5 w-12 h-12 rounded-full bg-amber-50 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-black scale-110' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows (Optional) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-black"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-black"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;