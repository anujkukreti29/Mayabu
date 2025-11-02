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

const CategoriesBar = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const containerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Scroll event handler to enable/disable arrows
  const updateScrollState = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.offsetWidth * 0.7;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center w-[97%] sm:w-[95%] mx-auto mt-2 py-2 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-gray-100 shadow-sm select-none overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className={`absolute left-2 flex items-center justify-center rounded-full 
          bg-white/80 shadow-sm transition-all duration-300
          ${canScrollLeft ? "opacity-100" : "opacity-50 pointer-events-none"}`}
        style={{
          width: ARROW_BUTTON_SIZE,
          height: ARROW_BUTTON_SIZE,
          zIndex: 5,
        }}
        tabIndex={-1}
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Category Icons */}
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-7 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar items-center px-10"
        style={{
          scrollSnapType: "x mandatory",
          minHeight: 56,
          width: "100%",
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.06 }}
            onClick={() => {
              setSelectedCategory(cat.name);
              onCategorySelect && onCategorySelect(cat.name);
            }}
            className={`group flex flex-col items-center min-w-[56px] sm:min-w-[64px] md:min-w-[72px] transition-colors select-none focus:outline-none
              ${
                selectedCategory === cat.name
                  ? "font-semibold text-blue-700"
                  : "text-gray-700 group-hover:text-blue-600"
              }`}
            tabIndex={-1}
            title={cat.name}
            style={{
              background: "none",
              border: "none",
              outline: "none",
            }}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-1 rounded-xl border border-gray-200 shadow-sm transition-all duration-200
                ${
                  selectedCategory === cat.name
                    ? "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700"
                    : "bg-white group-hover:bg-blue-50"
                }
              `}
              style={{
                scrollSnapAlign: "center",
              }}
            >
              {cat.icon}
            </div>
            <span className="text-[10px] sm:text-xs font-medium text-center truncate max-w-[70px]">
              {cat.name}
            </span>
          </motion.button>
        ))}
      </div>
      
      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className={`absolute right-2 flex items-center justify-center rounded-full 
          bg-white/80 shadow-sm transition-all duration-300
          ${canScrollRight ? "opacity-100" : "opacity-50 pointer-events-none"}`}
        style={{
          width: ARROW_BUTTON_SIZE,
          height: ARROW_BUTTON_SIZE,
          zIndex: 5,
        }}
        tabIndex={-1}
      >
        <FiChevronRight size={20} />
      </button>
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
