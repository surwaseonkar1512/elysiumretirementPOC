import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full mt-10 font-outfit">
      {/* Banner Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="https://elysiumretirement.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-5.04.57-PM.jpeg"
          alt="About Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 my-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src="https://elysiumretirement.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-01-27-at-4.23.26-PM-r0mii10qgemlvbcvtp45aiq0bbjmh5y1rtntaxucv4.jpeg"
              alt="Engagement Shoot"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white py-12 px-6 md:px-20 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Contact us</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <h3 className="text-lg md:text-xl font-semibold text-yellow-600 mb-6">
                Because They Deserve the Same Love They Gave You
              </h3>

              <p className="text-gray-700 mb-4">
                Thousands of miles away, sitting in Melbourne, we often think of
                our parents in Chennai — dad at 78, mom at 71. Their love,
                sacrifices, and the life they built for us are always on our
                minds. But now, a different set of questions keeps us awake:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>What if they face a medical emergency?</li>
                <li>Who will be there to care for them, really?</li>
                <li>
                  Can they support each other emotionally, day in and day out?
                </li>
                <li>What happens if one is left alone?</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full bg-green-800 py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side: Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-4">
            We're Ready, Let's Talk.
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

          <form className="bg-white border p-6 rounded-md shadow-sm space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-1/2 p-2 border rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-1/2 p-2 border rounded focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your Email*"
                className="w-1/2 p-2 border rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone No*"
                className="w-1/2 p-2 border rounded focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded focus:outline-none bg-gray-50"
            ></textarea>
            <button
              type="submit"
              className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="w-16 h-1 bg-yellow-500 mb-4"></div>

            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-gray-200" />
              <span className="text-gray-200">India</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-gray-200" />
              <span className="text-gray-200">info@elysiumretirement.com</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-gray-200" />
              <span className="text-gray-200">+91 63797 70545</span>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
            <div className="flex gap-4">
              <a href="#" className="bg-green-900 p-2 rounded text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-green-900 p-2 rounded text-white">
                <FaInstagram />
              </a>
              <a href="#" className="bg-green-900 p-2 rounded text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-green-900 p-2 rounded text-white">
                <FaTimes />
              </a>
              <a href="#" className="bg-green-900 p-2 rounded text-white">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Section Title */}

          {/* Google Map Iframe */}
          <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160990803!2d72.74109974866067!3d19.082197839541807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f66a43a93%3A0x6e0c1a0f3c6f19!2sMumbai!5e0!3m2!1sen!2sin!4v1692298048904!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
