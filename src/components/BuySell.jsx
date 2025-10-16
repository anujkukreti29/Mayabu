import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiDollarSign } from "react-icons/fi";

const cards = [
  {
    id: 1,
    title: "Buy Products",
    desc: "Compare prices from multiple sellers and find the best deals for your desired products. Make informed buying decisions with accurate market data.",
    icon: <FiShoppingCart size={28} />,
    link: "/buyers",
  },
  {
    id: 2,
    title: "Sell Products",
    desc: "Reach a wide audience of buyers and list your products confidently. Get competitive pricing and insights to maximize your selling potential.",
    icon: <FiDollarSign size={28} />,
    link: "/sellers",
  },
];

// Card animation with deeper shadow and subtle lift
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 120 },
  }),
  hover: {
    scale: 1.07,
    y: -10,
    boxShadow: "0 30px 60px rgba(16, 112, 224, 0.3)",
    transition: { type: "spring", stiffness: 250 },
  },
};

// Icon animation with subtle pop and rotation reset
const iconVariants = {
  hidden: { scale: 0, rotate: -15, opacity: 0 },
  visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 160 } },
};

const BuySellCards = () => {
  return (
    <div className="w-[97%] sm:w-[95%] mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          onClick={() => (window.location.href = card.link)}
          className="relative rounded-3xl p-10 cursor-pointer bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden border border-gray-200 shadow-lg group transition-transform duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-blue-300"
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.location.href = card.link;
            }
          }}
          aria-label={`Navigate to ${card.title} page`}
        >
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-md"
          >
            {card.icon}
          </motion.div>

          {/* Title & Description */}
          <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-700">{card.desc}</p>

          {/* Subtle hover overlay */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 pointer-events-none group-hover:opacity-25"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.25 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BuySellCards;
