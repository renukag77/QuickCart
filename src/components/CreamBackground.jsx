import React from "react";

const CreamBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen bg-[#EFDFBB] ${className}`}>
      {/* Gradient overlay for faded effect at the top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EFDFBB] to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default CreamBackground;
