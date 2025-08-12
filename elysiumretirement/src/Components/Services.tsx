import { FaRegClock } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-6">
      {/* Animated Logo */}
      <div className="mb-6 animate-bounce">
        <div className="w-24 h-24 flex items-center justify-center bg-green-500 rounded-2xl shadow-lg transform rotate-45">
          <div className="bg-white w-12 h-12 rounded-lg rotate-45"></div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 flex items-center gap-3">
        <FaRegClock className="text-green-500 animate-pulse" />
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mb-8">
        We’re working hard to bring you something amazing. Stay tuned and check
        back soon for exciting updates!
      </p>

      {/* Countdown (placeholder) */}

      {/* Notify Button */}
    </div>
  );
}
