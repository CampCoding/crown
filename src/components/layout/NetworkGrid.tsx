import React from "react";

const NetworkGrid = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Horizontal "Network" Lines */}
      <div className="flex flex-col justify-between h-full w-full py-10 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#6ae3fc]/50 to-transparent"
          />
        ))}
      </div>

      {/* Vertical "Network" Lines */}
      <div className="absolute inset-0 flex justify-between px-10 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"
          />
        ))}
      </div>
    </div>
  );
};

export default NetworkGrid;
