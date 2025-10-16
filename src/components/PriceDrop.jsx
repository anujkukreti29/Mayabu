// src/components/PriceDrop.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

function LowestPriceDropCard({ id, image, title, lowestPrice, oldPrice, priceDrop, rating, verified }) {
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
        {verified && <FaCheckCircle className="absolute top-2 right-2 text-green-500" size={18} />}
      </div>

      <div className="p-3 flex flex-col justify-between flex-1">
        <h4 className="font-semibold mb-2 line-clamp-2 text-gray-900 text-[15px] leading-snug">{title}</h4>
        <div className="flex flex-col gap-1 mb-2">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-green-600 text-lg">₹{lowestPrice.toLocaleString("en-IN")}</span>
            {oldPrice && <span className="line-through text-gray-400 text-sm">₹{oldPrice.toLocaleString("en-IN")}</span>}
          </div>
          <div className="flex items-center justify-between">
            {priceDrop && <span className="text-red-600 text-xs font-semibold">↓ ₹{priceDrop.toLocaleString("en-IN")} drop</span>}
            <span className="flex items-center text-yellow-500 text-xs">
              <FaStar size={12} />
              <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LowestPriceDrops() {
  const priceDrops = products.filter(p => p.priceDrop); // Only IDs 101-105
  return (
    <section className="w-[97%] sm:w-[95%] mx-auto py-12">
      <motion.h2 className="font-extrabold mb-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl">
        🔥 Price Drops
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {priceDrops.map(product => <LowestPriceDropCard key={product.id} {...product} />)}
      </div>
    </section>
  );
}
