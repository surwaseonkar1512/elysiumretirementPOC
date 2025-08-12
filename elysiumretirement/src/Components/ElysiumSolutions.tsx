import React from "react";

const CircleDiagram = () => {
  return (
    <div className="flex justify-center items-center min-h-[500px] relative">
      {/* Center Circle */}
      <div className="w-48 h-48 rounded-full border border-gray-500 flex items-center justify-center text-center p-4 relative z-10 bg-white">
        <p className="text-sm">
          Smart Integration of Technology for Enhancing Communication and Care
        </p>
      </div>

      {/* Technology Circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-green-800 flex items-center justify-center bg-white text-green-800 font-bold">
          Technology
        </div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-[-10px]" />
      </div>

      {/* People Circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-green-800 flex items-center justify-center bg-white text-green-800 font-bold">
          People
        </div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-[-10px]" />
      </div>

      {/* Processes Circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-green-800 flex items-center justify-center bg-white text-green-800 font-bold">
          Processes
        </div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-[-10px]" />
      </div>

      {/* Design Circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-green-800 flex items-center justify-center bg-white text-green-800 font-bold">
          Design
        </div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-[-10px]" />
      </div>
    </div>
  );
};

export default CircleDiagram;
