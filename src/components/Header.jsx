import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-[#EFDFBB]/30">
      {/* Notification banner */}
      <div className="bg-[#EFDFBB]/50 py-2 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <span className="inline-block">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </span>
          <p className="text-sm">Flash sale is going on upto 75%</p>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="5" y="5" width="30" height="20" stroke="black" strokeWidth="2" fill="none" />
                <rect x="5" y="15" width="30" height="20" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Farnic</h1>
              <p className="text-xs text-gray-500">Furniture</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#" className="font-medium hover:text-gray-600 flex items-center">
                Home
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="font-medium hover:text-gray-600 flex items-center">
                Pages
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
            <a href="#" className="font-medium hover:text-gray-600">About</a>
            <a href="#" className="font-medium hover:text-gray-600">Contact</a>
          </nav>
          
          {/* Right section with search, account, cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#EFDFBB]/30 rounded-md px-3 py-1 text-sm hidden md:block"
              />
              <button className="p-2 hover:bg-[#EFDFBB]/50 rounded-full">
                <Search size={20} />
              </button>
            </div>
            <button className="p-2 hover:bg-[#EFDFBB]/50 rounded-full">
              <User size={20} />
            </button>
            <div className="relative">
              <button className="p-2 hover:bg-[#EFDFBB]/50 rounded-full">
                <ShoppingCart size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;