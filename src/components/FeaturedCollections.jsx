import React from 'react';
//THIRD
const ProductCard = ({ image, name, currentPrice, originalPrice }) => {
  const accentColor = "#722F37";
  const creamColor = "#EFDFBB";

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl group"
      style={{ 
        border: `2px solid ${accentColor}`,
        backgroundColor: accentColor,
        color: creamColor
      }}
    >
      <div className="overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>
      <div 
        className="p-6 text-center"
        style={{ backgroundColor: `${accentColor}` }}
      >
        <h3 
          className="text-xl font-semibold mb-2 h-14 flex items-center justify-center"
          style={{ color: creamColor }}
        >
          {name}
        </h3>
        <div className="flex justify-center items-center space-x-2">
          <span 
            className="text-lg font-semibold"
            style={{ color: creamColor }}
          >
            ₹{currentPrice}
          </span>
          {originalPrice && (
            <span className="text-gray-300 line-through text-sm ml-2">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedCollections = ({ 
  products = [
    {
      image: "/api/placeholder/300/300?text=Accent+Chair",
      name: "Accent Leisure Chairs",
      currentPrice: "4,299",
      originalPrice: "6,699"
    },
    {
      image: "/api/placeholder/300/300?text=Wooden+Table",
      name: "Wooden Showpice Table",
      currentPrice: "2,099",
      originalPrice: "4,459"
    },
    {
      image: "/api/placeholder/300/300?text=Egg+Chair",
      name: "Blockers Egg Chair",
      currentPrice: "3,279",
      originalPrice: "5,229"
    },
    {
      image: "/api/placeholder/300/300?text=Side+Table",
      name: "Classic Side Table",
      currentPrice: "2,789",
      originalPrice: "4,269"
    },
    {
      image: "/api/placeholder/300/300?text=Storage+Unit",
      name: "Vintage Storage Unit",
      currentPrice: "5,879",
      originalPrice: "8,159"
    },
    {
      image: "/api/placeholder/300/300?text=Bed+Frame",
      name: "Tufted Bed Frame",
      currentPrice: "17,999",
      originalPrice: "26,099"
    }
  ]
}) => {
  const creamColor = "#EFDFBB";
  const accentColor = "#722F37";

  return (
    <div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: creamColor }}
    >
      <div className="container mx-auto">
        <h2 
          className="text-center text-4xl font-bold mb-4"
          style={{ color: accentColor }}
        >
          Featured Collections
        </h2>
        <p 
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: `${accentColor}80` }}
        >
          Most Selling and Trending Products
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              name={product.name}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;