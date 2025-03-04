import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('beige');

  const colors = [
    { name: 'beige', hex: '#F5E6D3' },
    { name: 'green', hex: '#2F4F4F' },
    { name: 'blue', hex: '#4169E1' }
  ];

  return (
    <div className="min-h-screen bg-[#EFDFBB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Top Banner Section */}
        <div className="bg-[#722F37] text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Product Details</h1>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing scelerisque a tincidunt urna nisl quam orci males
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image Section */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md mb-4">
              <img 
                src="/api/placeholder/500/500" 
                alt="Accent Leisure Chair" 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3].map((index) => (
                <img 
                  key={index}
                  src="/api/placeholder/100/100" 
                  alt={`Product Thumbnail ${index}`} 
                  className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-75 transition"
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#722F37] mb-4">Accent Leisure Chairs</h2>
            
            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-semibold text-[#722F37]">₹ 65.35</span>
              <span className="ml-4 line-through text-gray-500">₹ 102.35</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus pharetra purus. Ut enim sed id amet bibendum amet, vestibulum. Sed morbi site
            </p>

            {/* Delivery Info */}
            <div className="mb-4">
              <p className="font-medium">
                Delivery: <span className="text-green-600">Free delivery (over ₹50)</span>
              </p>
              <p className="font-medium">
                Stock: <span className="text-[#722F37]">12 Available</span>
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color.name 
                        ? 'border-[#722F37] scale-110' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-[#722F37] text-white px-3 py-1 rounded-l"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  readOnly
                  className="w-16 text-center border py-1"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-[#722F37] text-white px-3 py-1 rounded-r"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="w-full bg-[#722F37] text-white py-3 rounded-lg hover:bg-[#5a252d] transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>

        {/* Sidebar - Search and Categories */}
        <div className="absolute top-36 right-8 w-64 bg-white shadow-lg rounded-lg p-6">
          {/* Search */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Keywords here" 
                className="w-full border rounded-md py-2 px-3 pr-10"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {['Chair', 'Bed', 'Sofa', 'Table', 'Side Drawer', 'Dining Chair'].map((category) => (
                <li 
                  key={category} 
                  className="text-gray-600 hover:text-[#722F37] transition cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;