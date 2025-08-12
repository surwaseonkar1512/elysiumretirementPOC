"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#034702] text-white font-outfit">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <img
            src="https://elysiumretirement.com/wp-content/uploads/2025/01/logo.png"
            alt="Elysium Retirement"
            className="w-32 mb-4"
          />
          <p className="text-xl font-bold">Elysium Retirement</p>
          <p className="text-lg italic mt-1">Ending Loneliness in Style</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collaborate With Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 mb-3">
            <MdEmail className="text-xl" /> info@elysiumretirement.com
          </p>
          <p className="flex items-center gap-2 mb-3">
            <MdPhone className="text-xl" /> +91 63797 70545
          </p>
          <p className="flex items-center gap-2">
            <MdLocationOn className="text-xl" /> 123 Elysium Street, Pune, India
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-400 text-black text-center py-3 text-sm font-semibold">
        Copyright {new Date().getFullYear()}. All Rights Reserved | Design &
        Developed by VM3 Tech Solutions LLP
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/916379770545"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </footer>
  );
}
