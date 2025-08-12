import React, { useState } from "react";

const photoshootOptions = [
  "Wedding Shoot",
  "Pre-Wedding Shoot",
  "Maternity Shoot",
  "Birthday Shoot",
  "Baby Shoot",
  "Fashion Shoot",
  "Event Shoot",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    countrycode: "+91",
    message: "",
    type: "",
    shootDate: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStaticSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted! (Static version - no API call)");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phoneNo: "",
      countrycode: "+91",
      message: "",
      type: "",
      shootDate: "",
    });
  };

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('https://media.gettyimages.com/id/1295231419/photo/senior-male-friends-having-fun-at-park.jpg?s=612x612&w=0&k=20&c=q20DT9kD73FLDdMc3UBjY50qhxCgUjavZ5HRRBj0y2A=')`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Contact Form */}
        <div className="w-full text-white text-center md:text-left mt-8 md:mt-0">
          <form
            onSubmit={handleStaticSubmit}
            className="mt-6 space-y-4 bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-1/2 p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-1/2 p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
            />
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
            >
              <option value="" disabled>
                Select Photo Shoot Type
              </option>
              {photoshootOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="shootDate"
              value={formData.shootDate}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#FFC27A] text-gray-800 bg-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#034702] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Text */}
        <div className="text-white space-y-6">
          <div className="w-[300px] flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contact us
            </h2>
            <div className="w-20 h-[3px] bg-yellow-500 mt-2 mb-10"></div>
          </div>
          <h3 className="text-3xl font-bold">
            We’re Here to Capture Your Moments
          </h3>
          <p className="text-lg opacity-90">
            Our Independent Living option provides a private, fully-equipped
            living space with the freedom to enjoy your life as you please. It's
            perfect for those who are independent but desire a supportive
            community nearby.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              ✅ Our Independent Living option provides a private,
              fully-equipped
            </li>
            <li className="flex items-center gap-2">
              ✅ independent but desire a supportive community nearby.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
