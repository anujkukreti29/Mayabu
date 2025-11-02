import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Tag } from "lucide-react";

const fadeIn = (direction = "up") => ({
  hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

const cardVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function BuySellSection({ onBuy = () => {}, onSell = () => {} }) {
  return (
    <section className="w-[97%] sm:w-[95%] py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-[1.5rem] shadow-2xl overflow-hidden mx-auto mb-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeIn("up")}
          className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.45rem] font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Discover the True Meaning of{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">
              Mayabu
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-[500] leading-relaxed mb-6">
            <span className="font-bold text-indigo-500 dark:text-indigo-400">
              Mayabu
            </span>{" "}
            isn’t just about buying or selling—it’s about redefining trust,
            transparency, and intelligence in device trade. Compare prices,
            evaluate worth, and trade smartly in one modern, seamless
            experience.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0 italic">
            Designed with simplicity, powered by intelligence — your future in
            resale starts here.
          </p>
        </motion.div>

        {/* RIGHT SIDE (BUY & SELL CARDS) */}
        <motion.div
          variants={fadeIn("up")}
          className="md:w-1/2 flex flex-col md:gap-8 w-full sm:max-w-md mx-auto md:mx-0"
        >
          {/* CARD CONTAINER — responsive layout logic */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-8 justify-center md:justify-start items-center md:items-stretch">
            {/* BUY CARD */}
            <motion.div
              variants={cardVariant}
              whileHover={{
                scale: 1.045,
                y: -7,
                boxShadow: "0 10px 28px 0 rgba(52, 211, 153, 0.14)",
                borderColor: "#34D399",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-row items-center justify-between bg-white dark:bg-gray-950 shadow-xl rounded-2xl border border-green-100 dark:border-green-700 p-4 sm:p-5 hover:shadow-2xl transition-all duration-300 cursor-pointer group w-[48%] md:w-full"
              onClick={onBuy}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: -12, scale: 1.13 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="p-2 sm:p-3 bg-green-100 dark:bg-green-950 rounded-xl"
                >
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                </motion.div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white font-[600]">
                    Buy Devices
                  </h3>
                  <p className="hidden sm:block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 font-[500]">
                    Explore verified offers, compare prices & get the best deals instantly.
                  </p>
                </div>
              </div>
              <motion.span
                whileHover={{ x: 6, scale: 1.2 }}
                transition={{ duration: 0.35 }}
                className="text-green-600 dark:text-green-400 font-bold text-lg sm:text-xl ml-2 group-hover:animate-bounce"
              >
                →
              </motion.span>
            </motion.div>

            {/* SELL CARD */}
            <motion.div
              variants={cardVariant}
              whileHover={{
                scale: 1.045,
                y: -7,
                boxShadow: "0 10px 28px 0 rgba(99, 102, 241, 0.16)",
                borderColor: "#6366F1",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-row items-center justify-between bg-white dark:bg-gray-950 shadow-xl rounded-2xl border border-indigo-100 dark:border-indigo-700 p-4 sm:p-5 hover:shadow-2xl transition-all duration-300 cursor-pointer group w-[48%] md:w-full"
              onClick={onSell}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 13, scale: 1.13 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                  className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-950 rounded-xl"
                >
                  <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white font-[600]">
                    Sell Devices
                  </h3>
                  <p className="hidden sm:block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 font-[500]">
                    Get instant valuations, schedule pickup, and receive secure payments.
                  </p>
                </div>
              </div>
              <motion.span
                whileHover={{ x: 6, scale: 1.2 }}
                transition={{ duration: 0.35 }}
                className="text-indigo-600 dark:text-indigo-400 font-bold text-lg sm:text-xl ml-2 group-hover:animate-bounce"
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
