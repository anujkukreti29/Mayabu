import React, { useRef, useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSmartphone,
  FiMonitor,
  FiTv,
  FiWind,
  FiHeadphones,
  FiShoppingBag,
  FiGift,
  FiHome,
  FiTruck,
  FiCoffee,
  FiCamera,
  FiBook,
  FiHeart,
  FiCpu,
  FiWatch,
  FiUmbrella,
} from "react-icons/fi";
import { motion } from "framer-motion";

const categories = [
  { id: 1, name: "Phones", icon: <FiSmartphone size={18} /> },
  { id: 2, name: "Laptops", icon: <FiMonitor size={18} /> },
  { id: 3, name: "TVs", icon: <FiTv size={18} /> },
  { id: 4, name: "ACs", icon: <FiWind size={18} /> },
  { id: 5, name: "Audio", icon: <FiHeadphones size={18} /> },
  { id: 6, name: "Fashion", icon: <FiShoppingBag size={18} /> },
  { id: 7, name: "Toys", icon: <FiGift size={18} /> },
  { id: 8, name: "Furniture", icon: <FiHome size={18} /> },
  { id: 9, name: "Auto", icon: <FiTruck size={18} /> },
  { id: 10, name: "Gourmet", icon: <FiCoffee size={18} /> },
  { id: 11, name: "Cameras", icon: <FiCamera size={18} /> },
  { id: 12, name: "Books", icon: <FiBook size={18} /> },
  { id: 13, name: "Health", icon: <FiHeart size={18} /> },
  { id: 14, name: "Parts", icon: <FiCpu size={18} /> },
  { id: 15, name: "Watches", icon: <FiWatch size={18} /> },
  { id: 16, name: "Essentials", icon: <FiUmbrella size={18} /> },
];

const ARROW_BUTTON_SIZE = 36;
const ARROW_GAP = 12;

const CategoriesBar = ({ onCategorySelect, selectedCategory = categories[0].name }) => {
  const containerRef = useRef(null);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    function updateMeasurements() {
      if (containerRef.current) {
        const clientWidth = containerRef.current.clientWidth;
        const scrollableWidth = containerRef.current.scrollWidth;
        setContainerWidth(clientWidth);
        setMaxScrollLeft(scrollableWidth - clientWidth);
        setIsScrollable(scrollableWidth > clientWidth);
      }
    }
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, [categories.length]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth / 2;
      let newScrollPosition =
        containerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      newScrollPosition = Math.max(0, Math.min(newScrollPosition, maxScrollLeft));
      containerRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    }
  };

  const maxIconsWidth = containerWidth - 2 * (ARROW_BUTTON_SIZE + ARROW_GAP);

  return (
    <div
      className="relative flex items-center w-[97%] sm:w-[95%] mx-auto mt-1 py-2 rounded-2xl shadow bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-gray-100"
      style={{ minHeight: 56 }}
    >
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="flex items-center justify-center rounded-full bg-white/70 shadow-sm transition-transform hover:scale-105 hover:bg-blue-50 focus:outline-none active:outline-none border-none absolute top-1/2 -translate-y-1/2 z-20"
        style={{
          width: ARROW_BUTTON_SIZE,
          height: ARROW_BUTTON_SIZE,
          left: ARROW_GAP,
          padding: "6px",
        }}
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Categories Container */}
      <div
        ref={containerRef}
        className="flex gap-6 sm:gap-9 overflow-x-auto scroll-smooth no-scrollbar items-center"
        style={{
          maxWidth: maxIconsWidth > 0 ? maxIconsWidth : "100%",
          paddingLeft: ARROW_GAP,
          paddingRight: ARROW_GAP,
          minHeight: "56px",
          justifyContent: isScrollable ? "flex-start" : "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.06 }}
            onClick={() => onCategorySelect && onCategorySelect(cat.name)}
            className={`group flex flex-col items-center min-w-[60px] sm:min-w-[72px] select-none transition-all ${
              selectedCategory === cat.name
                ? "font-bold text-blue-700"
                : "text-gray-700 group-hover:text-blue-600"
            }`}
            tabIndex={-1}
            style={{
              background: "none",
              border: "none",
              outline: "none",
            }}
            title={cat.name}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-1 rounded-xl border border-gray-200 shadow-sm
                ${
                  selectedCategory === cat.name
                    ? "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700"
                    : "bg-white group-hover:bg-blue-50"
                }
              `}
            >
              {cat.icon}
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-center truncate max-w-[70px]">
              {cat.name}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="flex items-center justify-center rounded-full bg-white/70 shadow-sm transition-transform hover:scale-105 hover:bg-blue-50 focus:outline-none active:outline-none border-none absolute top-1/2 -translate-y-1/2 z-20"
        style={{
          width: ARROW_BUTTON_SIZE,
          height: ARROW_BUTTON_SIZE,
          right: ARROW_GAP,
          padding: "6px",
        }}
      >
        <FiChevronRight size={20} />
      </button>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoriesBar;
