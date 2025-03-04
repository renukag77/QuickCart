import React from 'react';
import { ChevronRight } from 'lucide-react';
//SECOND
const FurnitureLanding = ({ 
  heroCollection = {
    title: "Accent Leisure Chairs",
    description: "Elevate your living space with our meticulously crafted leisure chairs designed for comfort and style.",
    images: [
      "/components/furniture1.png",
      "/components/furniture2.png"
    ]
  },
  featuredProduct = {
    title: "Modern & Minimal",
    subtitle: "Discover elegance in simplicity",
    discount: "UP TO 20% OFF",
    image: "/api/placeholder/500/300?text=Featured+Sofa"
  },
  categories = [
    { name: "Living Room", image: "/api/placeholder/300/200?text=Living+Room" },
    { name: "Bedroom", image: "/api/placeholder/300/200?text=Bedroom" },
    { name: "Dining Room", image: "/api/placeholder/300/200?text=Dining+Room" }
  ]
}) => {
  const creamColor = "#EFDFBB";
  const accentColor = "#722F37";

  return (
    <div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: creamColor }}
    >
      {/* Hero Collection Section */}
      <div className="grid md:grid-cols-2 gap-12 py-16">
        <div 
          className="bg-white p-10 rounded-lg flex flex-col justify-center shadow-lg"
          style={{ backgroundColor: accentColor, color: creamColor }}
        >
          <h3 className="text-sm uppercase tracking-wide opacity-70 mb-4">New Collections</h3>
          <h2 className="text-4xl font-bold mb-6">{heroCollection.title}</h2>
          <p className="opacity-80 mb-8">{heroCollection.description}</p>
          <button 
            className="self-start px-8 py-3 rounded-md flex items-center font-semibold transition"
            style={{ 
              backgroundColor: creamColor, 
              color: accentColor,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Shop Now <ChevronRight className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {heroCollection.images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Chair ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg shadow-xl"
              style={{ 
                border: `4px solid ${accentColor}`,
                objectFit: 'cover'
              }}
            />
          ))}
        </div>
      </div>

      {/* Featured Product Section */}
      <div 
        className="rounded-lg p-12 grid md:grid-cols-2 items-center my-16 shadow-lg"
        style={{ 
          backgroundColor: accentColor, 
          color: creamColor 
        }}
      >
        <div>
          <span 
            className="font-semibold text-lg"
            style={{ color: creamColor }}
          >
            {featuredProduct.discount}
          </span>
          <h2 className="text-5xl font-bold my-6">{featuredProduct.title}</h2>
          <p className="mb-8 opacity-80">{featuredProduct.subtitle}</p>
          <button 
            className="px-8 py-4 rounded-md font-semibold transition"
            style={{ 
              backgroundColor: creamColor, 
              color: accentColor,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Shop Collection
          </button>
        </div>
        <div className="flex justify-center">
          <img 
            src={featuredProduct.image} 
            alt="Featured Product" 
            className="max-h-[500px] rounded-lg shadow-xl"
            style={{ 
              border: `6px solid ${creamColor}`,
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16">
        <h2 className="text-center text-4xl font-bold mb-6" style={{ color: accentColor }}>
          Choose Your Category
        </h2>
        <p 
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: `${accentColor}80` }}
        >
          Select your perfect piece from our carefully curated category options
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
              style={{ 
                border: `2px solid ${accentColor}20`,
                backgroundColor: 'white'
              }}
            >
              <div className="overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div 
                className="p-6 text-center"
                style={{ backgroundColor: `${accentColor}10` }}
              >
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: accentColor }}
                >
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureLanding;