import React from "react";

const CoreProblems = () => {
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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-white text-3xl font-bold mb-2">
          Core Problems
        </h2>
        <div className="w-16 h-[3px] bg-[#B28704] mx-auto mb-10"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
            <img
              src="https://elysiumretirement.com/wp-content/uploads/2025/01/istockphoto-1150536544-612x612-1.png"
              alt="Loneliness"
              className="h-[400px] w-full object-cover"
            />
            <div className="bg-[#025A0A] text-white text-center py-3 font-bold text-lg">
              Loneliness
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
            <img
              src="https://elysiumretirement.com/wp-content/uploads/2025/01/istockphoto-1318163631-612x612-1-e1739453130295.png"
              alt="Lack of Support"
              className="h-[400px] w-full object-cover"
            />
            <div className="bg-[#025A0A] text-white text-center py-3 font-bold text-lg">
              Lack of Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProblems;
