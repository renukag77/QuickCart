import React from "react";

const CreamBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen bg-[#EFDFBB] ${className}`}>
      {/* Gradient overlay for fading only the top part */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#EFDFBB] pointer-events-none"></div>

      {/* Content remains unaffected */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CreamBackground;
