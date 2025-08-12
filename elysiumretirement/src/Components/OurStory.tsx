import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://elysiumretirement.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-27-at-4.23.26-PM-r0mii10qgemlvbcvtp45aiq0bbjmh5y1rtntaxucv4.jpeg" // replace with your image
            alt="Our Story"
            className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-2">
            <span className=" px-2">"Our Story"</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#B28704] mb-4"></div>

          {/* Paragraph */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sitting in Melbourne – some 8,700 kms away, my sister and I
            constantly think about our parents in Chennai – father (78) and
            mother (71). We reflect on their love, sacrifices, guidance and
            support constantly.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We recognized that while our parents have each other as social
            company, why are they still lonely.
          </p>

          {/* Bullet points */}
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>What if they had a medical emergency?</li>
            <li>Who is there to care for them?</li>
            <li>What if they cannot support each other, emotionally?</li>
            <li>What if they lost one? And so on.</li>
          </ul>

          {/* Button */}
          <button className="bg-green-800 text-white font-medium px-6 py-2 rounded-full hover:opacity-90 transition flex items-center gap-2">
            Know More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
