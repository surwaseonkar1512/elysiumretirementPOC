import React from "react";
import { FaHome, FaHandshake } from "react-icons/fa";

const LivingOptions = () => {
  return (
    <section className="bg-[#034702] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Living Options
        </h2>
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mt-2 mb-10"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaHome className="text-green-900 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Independent Living</h3>
            <p className="text-gray-700 text-sm">
              Our Independent Living option provides a private, fully-equipped
              living space with the freedom to enjoy your life as you please.
              It&apos;s perfect for those who are independent but desire a
              supportive community nearby.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaHandshake className="text-green-900 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Assisted Living</h3>
            <p className="text-gray-700 text-sm">
              Assisted Living provides a caring and supportive environment for
              seniors who need assistance with daily tasks. This option includes
              personalized care plans, medication management, and 24/7 support
              to ensure your comfort and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingOptions;
