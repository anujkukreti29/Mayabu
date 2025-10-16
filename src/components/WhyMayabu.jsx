import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiBarChart2, FiSearch, FiUsers } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Trusted Price Accuracy",
    desc: "We aggregate verified data to provide the most accurate and up-to-date prices across multiple sellers and platforms.",
    icon: <FiShield size={28} />,
  },
  {
    id: 2,
    title: "Comprehensive Market Insights",
    desc: "Access detailed comparisons and trends to make informed buying or selling decisions with confidence.",
    icon: <FiBarChart2 size={28} />,
  },
  {
    id: 3,
    title: "Best Price Finder",
    desc: "Quickly identify the best available prices for your desired device, whether you’re buying or selling.",
    icon: <FiSearch size={28} />,
  },
  {
    id: 4,
    title: "User Ratings & Reviews",
    desc: "Rely on transparent seller ratings and community reviews to ensure trustworthy and reliable transactions.",
    icon: <FiUsers size={28} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 100 },
  }),
  hover: {
    scale: 1.05,
    y: -5,
    transition: { type: "spring", stiffness: 200 },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -20, opacity: 0 },
  visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 150 } },
};

const WhyMayabu = () => {
  return (
    <div className="w-[97%] sm:w-[95%] mx-auto my-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl p-8 sm:p-12 shadow-md border border-gray-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12 text-left" // Changed from text-center to text-left
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Why <span className="text-blue-600">Mayabu</span>?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
          Discover a smarter way to compare prices and sellers — empowering buyers and sellers with trusted data and insights.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer overflow-hidden group"
          >
            <motion.div
              variants={iconVariants}
              className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>

            {/* Subtle hover gradient overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-20 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.4 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyMayabu;
