import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCollaborateClick = () => {
    navigate("/collaborate");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-4  text-green-800
          ${scrolled ? "bg-gray-200 shadow-md" : "bg-white"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://elysiumretirement.com/wp-content/uploads/2025/01/logo.png"
                alt="Logo"
                className="h-[60px]"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center text-green-800">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-semibold transition duration-300 ${
                      !isActive
                        ? "text-green-800" // gold active
                        : "text-yellow-600 hover:text-[#B28704]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Collaborate Button */}
            <div className="hidden md:block">
              <button
                onClick={handleCollaborateClick}
                className="bg-green-800 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                Collaborate With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-[#022E0A] focus:outline-none"
              >
                <FiMenu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img
            src="https://elysiumretirement.com/wp-content/uploads/2025/01/logo.png"
            alt="Logo"
            className="h-10"
          />
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-semibold transition duration-300 ${
                  isActive
                    ? "text-[#B28704]"
                    : "text-[#022E0A] hover:text-[#B28704]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              handleCollaborateClick();
            }}
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
          >
            Collaborate With Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
