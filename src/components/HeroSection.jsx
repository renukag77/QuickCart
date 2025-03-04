import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalSlides = 3;
  const creamColor = "#EFDFBB";

  // Set isLoaded after component mounts to trigger initial animations
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // Slightly longer duration between slides
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  // Content for each slide
  const slideContent = [
    {
      offer: "45% MEGA SALE OFFER",
      title: "Unique & Stylish Furniture",
      description: "Elevate your home with our premium furniture collection. Handcrafted for comfort and style."
    },
    {
      offer: "NEW ARRIVALS",
      title: "Modern Living Room Collection",
      description: "Transform your living space with our contemporary designs that blend form and function."
    },
    {
      offer: "LIMITED TIME OFFER",
      title: "Bedroom Essentials",
      description: "Create your perfect sanctuary with our cozy and elegant bedroom furniture selection."
    }
  ];

  // Furniture slide content
  const slides = [
    // Slide 1 furniture (Living Room)
    <>
      {/* Cabinet */}
      <div className="absolute left-0 bottom-20 transition-all duration-1000" 
           style={{
             opacity: currentSlide === 0 ? 1 : 0, 
             transform: `translateY(${currentSlide === 0 ? '0' : '50px'}) scale(${currentSlide === 0 ? 1 : 0.9})`,
             filter: `blur(${currentSlide === 0 ? 0 : '5px'})`
           }}>
        <div className="h-36 w-44 flex rounded-sm overflow-hidden bg-transparent shadow-lg">
          <div className="w-2/3 bg-amber-50 flex flex-col">
            <div className="h-1/2 border-b border-amber-100"></div>
            <div className="h-1/2"></div>
          </div>
          <div className="w-1/3 bg-teal-700"></div>
        </div>
        <div className="flex justify-between mt-1 px-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-6 w-1 bg-amber-100"></div>)}
        </div>
      </div>
      
      {/* Chair */}
      <div className="absolute left-1/2 bottom-16 transition-all duration-1000 delay-300" 
           style={{
             opacity: currentSlide === 0 ? 1 : 0, 
             transform: `translateY(${currentSlide === 0 ? '0' : '50px'}) rotate(${currentSlide === 0 ? 0 : '-5deg'})`
           }}>
        <div className="w-40 h-40 bg-white rounded-t-full relative overflow-hidden shadow-lg">
          <div className="absolute inset-2 rounded-t-full bg-gray-50"></div>
        </div>
        <div className="flex justify-between px-6">
          <div className="h-10 w-1 bg-amber-50 transform rotate-12"></div>
          <div className="h-10 w-1 bg-amber-50"></div>
          <div className="h-10 w-1 bg-amber-50 transform -rotate-12"></div>
        </div>
      </div>
      
      {/* Ottoman and Lamp */}
      <div className="absolute left-1/3 bottom-10 transition-all duration-1000 delay-500" 
           style={{
             opacity: currentSlide === 0 ? 1 : 0, 
             transform: `translateY(${currentSlide === 0 ? '0' : '50px'}) scale(${currentSlide === 0 ? 1 : 0.8})`
           }}>
        <div className="w-28 h-14 bg-white rounded-full shadow-lg">
          <div className="absolute inset-1 rounded-full bg-gray-50"></div>
        </div>
        <div className="flex justify-between px-6">
          {[...Array(3)].map((_, i) => <div key={i} className="h-8 w-1 bg-amber-50" style={{transform: i === 0 ? 'rotate(6deg)' : i === 2 ? 'rotate(-6deg)' : ''}}></div>)}
        </div>
      </div>
      <div className="absolute right-8 bottom-0 transition-all duration-1000 delay-700" 
           style={{
             opacity: currentSlide === 0 ? 1 : 0, 
             transform: `translateY(${currentSlide === 0 ? '0' : '50px'}) rotate(${currentSlide === 0 ? 0 : '10deg'})`
           }}>
        <div className="w-1 h-56 bg-amber-300"></div>
        <div className="absolute -top-6 -left-5 w-14 h-14 rounded-full bg-amber-50 shadow-lg"></div>
      </div>
    </>,
    
    // Slide 2 furniture (Bedroom)
    <>
      {/* Bed */}
      <div className="absolute left-1/4 bottom-16 transition-all duration-1000" 
           style={{
             opacity: currentSlide === 1 ? 1 : 0, 
             transform: `translateY(${currentSlide === 1 ? '0' : '50px'}) scale(${currentSlide === 1 ? 1 : 0.9})`,
             filter: `blur(${currentSlide === 1 ? 0 : '5px'})`
           }}>
        <div className="h-20 w-64 bg-amber-50 rounded-md shadow-lg"></div>
        <div className="h-8 w-68 -ml-2 bg-teal-600 rounded-t-md"></div>
        <div className="flex justify-between mt-1 px-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-8 w-1 bg-amber-100"></div>)}
        </div>
      </div>
      
      {/* Nightstand */}
      <div className="absolute right-1/4 bottom-20 transition-all duration-1000 delay-300" 
           style={{
             opacity: currentSlide === 1 ? 1 : 0, 
             transform: `translateY(${currentSlide === 1 ? '0' : '50px'}) rotate(${currentSlide === 1 ? 0 : '5deg'})`
           }}>
        <div className="h-32 w-24 bg-amber-100 rounded-sm shadow-lg flex flex-col">
          <div className="h-1/3 border-b border-amber-200"></div>
          <div className="h-2/3"></div>
        </div>
        <div className="flex justify-center mt-1">
          <div className="h-6 w-1 bg-amber-200"></div>
        </div>
      </div>
      
      {/* Dresser */}
      <div className="absolute left-8 bottom-24 transition-all duration-1000 delay-500" 
           style={{
             opacity: currentSlide === 1 ? 1 : 0, 
             transform: `translateY(${currentSlide === 1 ? '0' : '50px'}) scale(${currentSlide === 1 ? 1 : 0.8})`
           }}>
        <div className="h-36 w-40 bg-gray-50 rounded-sm shadow-lg flex flex-col">
          {[...Array(4)].map((_, i) => <div key={i} className="h-1/4 border-b border-gray-100"></div>)}
        </div>
        <div className="flex justify-between px-4 mt-1">
          {[...Array(3)].map((_, i) => <div key={i} className="h-6 w-1 bg-gray-200"></div>)}
        </div>
      </div>
      
      {/* Lamp */}
      <div className="absolute right-10 bottom-0 transition-all duration-1000 delay-700" 
           style={{
             opacity: currentSlide === 1 ? 1 : 0, 
             transform: `translateY(${currentSlide === 1 ? '0' : '50px'}) rotate(${currentSlide === 1 ? 0 : '-10deg'})`
           }}>
        <div className="w-1 h-48 bg-amber-300"></div>
        <div className="absolute -top-6 -left-5 w-14 h-14 rounded-full bg-amber-50 shadow-lg"></div>
      </div>
    </>,
    
    // Slide 3 furniture (Dining Room)
    <>
      {/* Dining Table */}
      <div className="absolute left-1/4 bottom-24 transition-all duration-1000" 
           style={{
             opacity: currentSlide === 2 ? 1 : 0, 
             transform: `translateY(${currentSlide === 2 ? '0' : '50px'}) scale(${currentSlide === 2 ? 1 : 0.9})`,
             filter: `blur(${currentSlide === 2 ? 0 : '5px'})`
           }}>
        <div className="h-10 w-72 bg-amber-50 rounded-md shadow-lg"></div>
        <div className="flex justify-between px-8 mt-1">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 w-1 bg-amber-100"></div>)}
        </div>
      </div>
      
      {/* Dining Chair 1 */}
      <div className="absolute left-1/4 bottom-12 transition-all duration-1000 delay-300" 
           style={{
             opacity: currentSlide === 2 ? 1 : 0, 
             transform: `translateY(${currentSlide === 2 ? '0' : '50px'}) rotate(${currentSlide === 2 ? 0 : '-5deg'})`
           }}>
        <div className="w-20 h-20 bg-teal-600 rounded-t-md relative overflow-hidden shadow-lg">
          <div className="absolute inset-1 rounded-t-md bg-teal-500"></div>
        </div>
        <div className="flex justify-between px-4">
          <div className="h-8 w-1 bg-amber-50"></div>
          <div className="h-8 w-1 bg-amber-50"></div>
        </div>
      </div>
      
      {/* Dining Chair 2 */}
      <div className="absolute right-1/4 bottom-12 transition-all duration-1000 delay-500" 
           style={{
             opacity: currentSlide === 2 ? 1 : 0, 
             transform: `translateY(${currentSlide === 2 ? '0' : '50px'}) rotate(${currentSlide === 2 ? 0 : '5deg'})`
           }}>
        <div className="w-20 h-20 bg-teal-600 rounded-t-md relative overflow-hidden shadow-lg">
          <div className="absolute inset-1 rounded-t-md bg-teal-500"></div>
        </div>
        <div className="flex justify-between px-4">
          <div className="h-8 w-1 bg-amber-50"></div>
          <div className="h-8 w-1 bg-amber-50"></div>
        </div>
      </div>
      
      {/* Cabinet */}
      <div className="absolute right-8 bottom-20 transition-all duration-1000 delay-700" 
           style={{
             opacity: currentSlide === 2 ? 1 : 0, 
             transform: `translateY(${currentSlide === 2 ? '0' : '50px'}) scale(${currentSlide === 2 ? 1 : 0.8})`
           }}>
        <div className="h-40 w-32 bg-gray-50 rounded-sm shadow-lg flex flex-col">
          <div className="h-1/2 border-b border-gray-100 flex">
            <div className="w-1/2 border-r border-gray-100"></div>
            <div className="w-1/2"></div>
          </div>
          <div className="h-1/2 flex">
            <div className="w-1/2 border-r border-gray-100"></div>
            <div className="w-1/2"></div>
          </div>
        </div>
        <div className="flex justify-between px-4 mt-1">
          {[...Array(4)].map((_, i) => <div key={i} className="h-6 w-1 bg-gray-200"></div>)}
        </div>
      </div>
    </>
  ];

  return (
    <section 
      className="relative h-96 md:h-[450px] lg:h-[540px] overflow-hidden max-w-6xl mx-auto" 
      style={{ 
        backgroundColor: creamColor,
        transition: 'all 0.8s ease-in-out',
        transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
        opacity: isLoaded ? 1 : 0
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 z-10 transition-all duration-1000 transform" 
             style={{
               opacity: isLoaded ? 1 : 0,
               transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)'
             }}>
          <p className="text-gray-700 mb-3 transition-all duration-1000"
             style={{
               opacity: 1, 
               transform: `translateY(${currentSlide === currentSlide ? '0' : '20px'})`,
               textShadow: '0px 0px 1px rgba(0,0,0,0.05)'
             }}>
            {slideContent[currentSlide].offer}
          </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000"
             style={{
               opacity: 1, 
               transform: `translateY(${currentSlide === currentSlide ? '0' : '20px'})`,
               textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
             }}>
            {slideContent[currentSlide].title}
          </h1>
          
          <p className="text-gray-700 mb-8 max-w-md transition-all duration-1000 text-lg"
             style={{
               opacity: 1, 
               transform: `translateY(${currentSlide === currentSlide ? '0' : '20px'})`
             }}>
            {slideContent[currentSlide].description}
          </p>
          
          <button className="bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-all duration-500 transform hover:translate-y-1 hover:shadow-lg">
            SHOP NOW
          </button>
        </div>
        
        {/* Furniture Display Area */}
        <div className="hidden md:block w-1/2 h-full relative">
          {slides.map((slide, index) => (
            <div key={index} 
                 className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 transform ${
                   currentSlide === index ? 'opacity-100 scale-100' : index === (currentSlide - 1 + totalSlides) % totalSlides ? 
                   'opacity-0 scale-90 translate-x-full' : 'opacity-0 scale-90 -translate-x-full'
                 }`}
                 style={{
                   transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                 }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Pagination Dots with animations */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              currentSlide === index 
              ? 'w-8 h-2 bg-black rounded-full' 
              : 'w-2 h-2 bg-gray-400 rounded-full'
            }`}
            style={{
              transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)',
              boxShadow: currentSlide === index ? '0 1px 3px rgba(0,0,0,0.2)' : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-amber-100 opacity-20"
           style={{
             transition: 'all 1s ease-in-out',
             transform: isLoaded ? 'scale(1)' : 'scale(0)'
           }}></div>
      <div className="absolute left-1/4 -bottom-8 w-32 h-32 rounded-full bg-teal-100 opacity-20"
           style={{
             transition: 'all 1s ease-in-out 0.3s',
             transform: isLoaded ? 'scale(1)' : 'scale(0)'
           }}></div>
    </section>
  );
};

export default HeroSection;