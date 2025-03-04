import React, { useState, useEffect } from 'react';
//FIRST
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
      description: "Elevate your home with our premium furniture collection. Handcrafted for comfort and style.",
      image: "/componenets/img1.png"
    },
    {
      offer: "NEW ARRIVALS",
      title: "Modern Living Room Collection",
      description: "Transform your living space with our contemporary designs that blend form and function.",
      image: "/components/img1.png"
    },
    {
      offer: "LIMITED TIME OFFER",
      title: "Bedroom Essentials",
      description: "Create your perfect sanctuary with our cozy and elegant bedroom furniture selection.",
      image: "/componenets/img1.png"
    }
  ];

  return (
    <section 
      className="relative h-[600px] overflow-hidden max-w-6xl mx-auto" 
      style={{ 
        backgroundColor: creamColor,
        transition: 'all 0.8s ease-in-out',
        transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
        opacity: isLoaded ? 1 : 0
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center relative">
        {/* Slides Container */}
        <div className="absolute inset-0 flex items-center">
          {slideContent.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center transition-all duration-1000 ${
                currentSlide === index 
                  ? 'opacity-100 translate-x-0' 
                  : currentSlide > index 
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="w-full flex items-center space-x-8">
                {/* Text Content */}
                <div className="w-1/2 z-10 pr-8">
                  <p className="text-gray-700 mb-3 uppercase tracking-wider text-sm">
                    {slide.offer}
                  </p>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-gray-700 mb-8 max-w-md text-lg leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <button className="bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-all duration-500 transform hover:translate-y-1 hover:shadow-lg">
                    SHOP NOW
                  </button>
                </div>

                {/* Image */}
                <div className="w-1/2">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="shadow-lg rounded-lg max-w-full h-auto object-cover"
                    style={{
                      maxHeight: '500px',
                      width: '100%'
                    }}
                  />
                </div>
              </div>
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