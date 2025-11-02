import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiBarChart2, FiSearch, FiUsers } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Trusted Price Accuracy",
    descShort: "We provide verified, accurate prices across multiple sellers.",
    desc:
      "We aggregate verified data to provide the most accurate and up-to-date prices across multiple sellers and platforms.",
    icon: <FiShield size={28} />,
    color: "from-green-100 to-green-300",
    iconBg: "bg-green-200 text-green-700 group-hover:bg-green-600 group-hover:text-white",
  },
  {
    id: 2,
    title: "Comprehensive Market Insights",
    descShort: "Access detailed trends and comparisons for confident decisions.",
    desc:
      "Access detailed comparisons and trends to make informed buying or selling decisions with confidence.",
    icon: <FiBarChart2 size={28} />,
    color: "from-yellow-100 to-yellow-300",
    iconBg: "bg-yellow-200 text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white",
  },
  {
    id: 3,
    title: "Best Price Finder",
    descShort: "Find the best prices quickly for buying or selling devices.",
    desc:
      "Quickly identify the best available prices for your desired device, whether you’re buying or selling.",
    icon: <FiSearch size={28} />,
    color: "from-blue-100 to-blue-300",
    iconBg: "bg-blue-200 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    id: 4,
    title: "User Ratings & Reviews",
    descShort: "Transparent ratings & reviews ensure trustworthy transactions.",
    desc:
      "Rely on transparent seller ratings and community reviews to ensure trustworthy and reliable transactions.",
    icon: <FiUsers size={28} />,
    color: "from-purple-100 to-purple-300",
    iconBg: "bg-purple-200 text-purple-700 group-hover:bg-purple-600 group-hover:text-white",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 130 },
  }),
  hover: {
    scale: 1.07,
    rotateX: -5,
    boxShadow: "0 20px 30px rgba(0,0,0,0.12)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1.2, opacity: 1, transition: { duration: 0.6, type: "spring", stiffness: 180 } },
  hover: { scale: 1.3, transition: { type: "spring", stiffness: 300 } },
};

const WhyMayabu = () => {
  return (
    <section className="w-[97%] sm:w-[95%] mx-auto my-12 p-6 bg-gradient-to-tr from-gray-50 via-white to-gray-50 rounded-3xl shadow-lg border border-gray-200">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 max-w-3xl text-left"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
          Why{" "}
          <span className="text-gradient bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
            Mayabu
          </span>
          ?
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl">
          Discover a smarter way to compare prices and sellers — empowering buyers and sellers with trusted data and insightful tools.
        </p>
      </motion.div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative cursor-pointer rounded-3xl p-4 sm:p-6 bg-white border border-gray-100 shadow-sm overflow-hidden group"
          >
            <motion.div
              variants={iconVariants}
              className={`flex items-center justify-center w-14 h-14 mb-3 sm:mb-5 rounded-xl ${feature.iconBg} transition-colors`}
              whileHover="hover"
            >
              {feature.icon}
            </motion.div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-snug sm:leading-relaxed">
              {/* Show short desc on mobile, full desc on bigger screens */}
              <span className="block sm:hidden">{feature.descShort}</span>
              <span className="hidden sm:block">{feature.desc}</span>
            </p>

            {/* Animated subtle gradient overlay on hover */}
            <motion.div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 pointer-events-none`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            {/* Decorative circles */}
            <motion.div
              className={`absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-10 bg-gradient-to-tr ${feature.color}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMayabu;
