const HeroBanner = () => {
  return (
    <section className="bg-[#034702] text-white md:min-h-[90vh] min-h-[60vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-6 md:gap-12">
        {/* Left Logo */}
        <img
          src="https://elysiumretirement.com/wp-content/uploads/2025/01/logo.png"
          alt="Left Logo"
          className="w-28 sm:w-32 md:w-40 h-auto"
        />

        {/* Center Content */}
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            Reinventing <span className="text-[#B28704]">Senior Living</span>
          </h1>
          <div className="w-12 sm:w-16 h-[2px] bg-[#B28704] mx-auto my-3"></div>
          <p className="text-sm sm:text-base md:text-lg font-medium">
            Experience the Elysium Way
          </p>
        </div>

        {/* Right Logo */}
        <img
          src="https://elysiumretirement.com/wp-content/uploads/2025/01/logo.png"
          alt="Right Logo"
          className="w-28 sm:w-32 md:w-40 h-auto"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
