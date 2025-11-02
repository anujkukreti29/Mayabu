import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFire,
  FaStar,
  FaBell,
  FaArrowDown,
  FaArrowUp,
  FaHistory,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"; // Make sure your products have required fields

// Individual product card with animations and interactive buttons
function TrendingDealCard({
  id,
  image,
  title,
  price,
  oldPrice,
  priceChange, // { type: 'drop' | 'increase', value: number }
  rating,
  verified,
  trending,
  discount,
  urgency,
  onSetPriceAlert,
}) {
  const navigate = useNavigate();

  const priceChangeIcon =
    priceChange?.type === "drop" ? (
      <FaArrowDown className="text-green-600" />
    ) : priceChange?.type === "increase" ? (
      <FaArrowUp className="text-red-600" />
    ) : null;

  const priceChangeColor =
    priceChange?.type === "drop"
      ? "bg-green-50 text-green-700"
      : priceChange?.type === "increase"
        ? "bg-red-50 text-red-700"
        : "bg-gray-100 text-gray-800";

  // Handlers (stopping propagation to avoid card click)
  const handleSetPriceAlert = (e) => {
    e.stopPropagation();
    onSetPriceAlert(id);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
        boxShadow: "0 18px 40px rgba(99, 102, 241, 0.15)",
        borderColor: "#6366F1",
      }}
      transition={{ type: "spring", stiffness: 170, damping: 20 }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:border-indigo-500"
      onClick={handleViewDetails}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && handleViewDetails(e)}
      aria-label={`View details for ${title}`}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-3 scale-95 transition-transform duration-300 ease-in-out group-hover:scale-100"
          loading="lazy"
        />
        {trending && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full shadow flex items-center gap-1">
            <FaFire size={11} /> Trending
          </span>
        )}
        {verified && (
          <FaCheckCircle
            className="absolute top-2 right-2 text-green-500 drop-shadow-md"
            size={16}
            title="Verified product"
          />
        )}
        {urgency && (
          <span className="absolute bottom-2 right-2 bg-yellow-400 text-black text-[10px] font-semibold px-2 py-0.5 rounded-full shadow animate-pulse">
            {urgency}
          </span>
        )}
        {discount && (
          <span className="absolute bottom-2 left-2 bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded shadow">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Details Section */}
      <div className="p-3 flex flex-col justify-between flex-1">
        <h4 className="text-gray-900 font-semibold mb-1 line-clamp-2 text-base sm:text-sm md:text-[15px]">
          {title}
        </h4>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-indigo-600">
            ₹{price.toLocaleString("en-IN")}
          </span>
          {oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ₹{oldPrice.toLocaleString("en-IN")}
            </span>
          )}
          <span className="flex items-center text-yellow-400 ml-auto text-sm">
            <FaStar size={14} aria-label="Rating star" />
            <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
          </span>
        </div>

        {priceChange && (
          <div
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold select-none ${priceChangeColor}`}
            aria-live="polite"
          >
            {priceChangeIcon}
            {priceChange.type === "drop" ? "Price Dropped" : "Price Increased"} by{" "}
            ₹{priceChange.value.toLocaleString("en-IN")}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <motion.button
            whileHover={{
              scale: 1.07
            }}
            transition={{ type: "spring", stiffness: 170 }}
            onClick={handleSetPriceAlert}
            className="flex items-center gap-2 py-1.5 px-3 bg-indigo-100 text-indigo-700 rounded-md border border-indigo-200 font-medium text-xs hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-400"
            aria-label={`Set price alert for ${title}`}
          >
            <FaBell size={14} /> Set Price Alert
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.07
            }}
            transition={{ type: "spring", stiffness: 170 }}
            onClick={handleViewDetails}
            className="flex items-center gap-2 py-1.5 px-3 bg-pink-100 text-pink-600 rounded-md border border-pink-200 font-semibold text-xs hover:bg-pink-600 hover:text-white focus:ring-2 focus:ring-pink-400"
            aria-label={`View details for ${title}`}
          >
            <FaHistory size={14} /> View Details
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
}

// Main Trending Deals Section rendering multiple cards
export default function TrendingDeals() {
  const [priceAlertProductId, setPriceAlertProductId] = useState(null);
  const navigate = useNavigate();

  // Filter trending products (adjust filter as needed)
  const trendingProducts = products.filter((p) => p.trending);

  // Dummy price alert handler - replace with modal or notification logic
  const handleSetPriceAlert = (productId) => {
    setPriceAlertProductId(productId);
    alert(`Price alert set for product ID: ${productId}`);
  };

  // Navigation handler for "See More"
  const handleSeeMore = () => {
    navigate("/trending-products"); // replace this with your actual route
  };

  return (
    <section className="w-[97%] sm:w-[95%] mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          className="font-extrabold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
        >
          Trending Deals
        </motion.h2>

        <motion.button
          onClick={handleSeeMore}
          className="flex items-center gap-2 bg-blue-500 text-white px-2.5 py-1 rounded-md shadow-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label="See more trending deals"
          type="button"
        >
          See More <FaArrowRight className="mt-[2px]" />
        </motion.button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {trendingProducts.map((product) => (
          <TrendingDealCard
            key={product.id}
            {...product}
            onSetPriceAlert={handleSetPriceAlert}
          />
        ))}
      </div>
    </section>
  );
}
