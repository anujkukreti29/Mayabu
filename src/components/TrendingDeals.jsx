// src/components/TrendingDeals.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFire, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

function TrendingDealCard({ id, image, title, price, oldPrice, rating, verified, trending, urgency }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
        boxShadow: "0 18px 40px rgba(99, 102, 241, 0.15)",
        borderColor: "#6366F1",
      }}
      transition={{ type: "spring", stiffness: 170, damping: 20 }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain p-2" />
        {trending && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white text-[10px] font-semibold px-2 py-1 rounded-full shadow">
            <FaFire size={10} /> Trending
          </span>
        )}
        {verified && <FaCheckCircle className="absolute top-2 right-2 text-green-500" size={16} />}
        {urgency && (
          <span className="absolute bottom-2 right-2 bg-yellow-400 text-black text-[10px] font-semibold px-2 py-0.5 rounded-full shadow animate-pulse">
            {urgency}
          </span>
        )}
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <h4 className="font-semibold mb-1 line-clamp-2 text-gray-900 text-base sm:text-sm md:text-[15px]">
          {title}
        </h4>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-pink-600 text-sm sm:text-base md:text-lg">₹{price.toLocaleString("en-IN")}</span>
          {oldPrice && <span className="line-through text-gray-400 text-xs sm:text-sm md:text-base">₹{oldPrice.toLocaleString("en-IN")}</span>}
          <span className="flex items-center text-yellow-500 ml-auto text-xs sm:text-sm">
            <FaStar size={12} />
            <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrendingDeals() {
  const deals = products.filter(p => p.trending); // Only IDs 1-5
  return (
    <section className="w-[97%] sm:w-[95%] mx-auto py-4">
      <motion.h2 className="font-extrabold mb-2 bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
        ✨ Trending Deals
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {deals.map(deal => <TrendingDealCard key={deal.id} {...deal} />)}
      </div>
    </section>
  );
}
