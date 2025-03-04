import React from 'react';
import { ChevronRight, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Importing images from the public folder
const heroImages = [
  "/bed.jpg",
  "/showpiece.jpg",
  "/woodenshowpiece.jpg",
  "/chair.jpg",
  "/eggchair.jpg",
  "/dinning.webp"
];

const FurnitureLanding = ({ 
  heroCollection = {
    title: "Accent Leisure Chairs",
    description: "Elevate your living space with our meticulously crafted leisure chairs designed for comfort and style.",
    images: [heroImages[3], heroImages[4]]
  },
  featuredProduct = {
    title: "Modern & Minimal",
    subtitle: "Discover elegance in simplicity",
    discount: "UP TO 20% OFF",
    image: heroImages[1]
  },
  categories = [
    { name: "Living Room", image: heroImages[2] },
    { name: "Bedroom", image: heroImages[0] },
    { name: "Dining Room", image: heroImages[5] }
  ]
}) => {
  const creamColor = "#EFDFBB";
  const accentColor = "#722F37";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: creamColor }}
    >
      {/* Hero Collection Section */}
      <motion.div 
        variants={itemVariants}
        className="grid md:grid-cols-2 gap-12 py-16"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-white p-10 rounded-lg flex flex-col justify-center shadow-2xl transform transition-all duration-300 hover:scale-[1.02]"
          style={{ 
            backgroundColor: accentColor, 
            color: creamColor,
            boxShadow: `0 10px 25px ${accentColor}40`
          }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-sm uppercase tracking-wide opacity-70 mb-4"
          >
            New Collections
          </motion.h3>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            {heroCollection.title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="opacity-80 mb-8"
          >
            {heroCollection.description}
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-8 py-3 rounded-md flex items-center font-semibold transition group"
            style={{ 
              backgroundColor: creamColor, 
              color: accentColor,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Shop Now 
            <ChevronRight 
              className="ml-2 group-hover:translate-x-1 transition" 
            />
          </motion.button>
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {heroCollection.images.map((img, index) => (
            <motion.img 
              key={index} 
              src={img} 
              alt={`Chair ${index + 1}`} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full object-cover rounded-lg shadow-xl transition-all duration-300"
              style={{ 
                border: `4px solid ${accentColor}`,
                objectFit: 'cover'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Featured Product Section */}
      <motion.div 
        variants={itemVariants}
        className="rounded-lg p-12 grid md:grid-cols-2 items-center my-16 shadow-2xl transform transition-all duration-300 hover:scale-[1.01]"
        style={{ 
          backgroundColor: accentColor, 
          color: creamColor,
          boxShadow: `0 10px 25px ${accentColor}40`
        }}
      >
        <div>
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center font-semibold text-lg"
          >
            <Star className="mr-2 text-yellow-300" />
            {featuredProduct.discount}
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold my-6"
          >
            {featuredProduct.title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mb-8 opacity-80"
          >
            {featuredProduct.subtitle}
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-md font-semibold transition group flex items-center"
            style={{ 
              backgroundColor: creamColor, 
              color: accentColor,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Shop Collection
            <ShoppingCart 
              className="ml-2 group-hover:animate-bounce" 
            />
          </motion.button>
        </div>
        <div className="flex justify-center">
          <motion.img 
            variants={itemVariants}
            src={featuredProduct.image} 
            alt="Featured Product" 
            whileHover={{ rotate: 2 }}
            className="max-h-[500px] rounded-lg shadow-xl transform transition-all duration-300"
            style={{ 
              border: `6px solid ${creamColor}`,
              objectFit: 'cover'
            }}
          />
        </div>
      </motion.div>

      {/* Categories Section */}
      <motion.div 
        variants={itemVariants}
        className="py-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-center text-4xl font-bold mb-6"
          style={{ color: accentColor }}
        >
          Choose Your Category
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-center text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: `${accentColor}80` }}
        >
          Select your perfect piece from our carefully curated category options
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300"
              style={{ 
                border: `2px solid ${accentColor}20`,
                backgroundColor: 'white'
              }}
            >
              <div className="overflow-hidden">
                <motion.img 
                  src={category.image} 
                  alt={category.name} 
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div 
                className="p-6 text-center transition-all duration-300 group-hover:bg-opacity-20"
                style={{ backgroundColor: `${accentColor}10` }}
              >
                <h3 
                  className="text-xl font-semibold transform transition-all duration-300 group-hover:scale-105"
                  style={{ color: accentColor }}
                >
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FurnitureLanding;