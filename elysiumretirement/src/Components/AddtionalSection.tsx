import { motion } from "framer-motion";

const AddtionalSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            {/* Heading */}
            <div className="w-[300px] flex flex-col  gap-3 items-start justify-between">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                Living Options
              </h2>
              <div className="w-20 h-[3px] bg-yellow-500 mx-auto mt-2 mb-10"></div>
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-black leading-tight font-Playfair">
              Here 50+ luxury senior communities across India
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed font-outfit">
              Develop 50+ luxury senior communities across India, providing a
              high-quality lifestyle for our residents. Ensure 90%+ resident
              satisfaction by offering exceptional care, comfort, and
              engagement. Transform 23,000 lives by ending loneliness and
              building a strong sense of belonging. Construct 1 crore square
              feet of senior living space by 2035, setting new standards in
              retirement living.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src="https://elysiumretirement.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-03-at-10.22.34-PM.jpeg"
              alt="Contact Us Photography"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AddtionalSection;
