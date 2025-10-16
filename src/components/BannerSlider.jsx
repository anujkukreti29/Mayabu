import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import banner1 from "../assets/images/banners/banner1.jpg";
import banner2 from "../assets/images/banners/banner2.jpg";
import banner3 from "../assets/images/banners/banner3.jpg";
import banner4 from "../assets/images/banners/banner4.jpg";
import banner5 from "../assets/images/banners/banner5.jpg";
import banner6 from "../assets/images/banners/banner6.jpg";

const slides = [
  { id: 1, image: banner1, alt: "Banner 1" },
  { id: 2, image: banner2, alt: "Banner 2" },
  { id: 3, image: banner3, alt: "Banner 3" },
  { id: 4, image: banner4, alt: "Banner 4" },
  { id: 5, image: banner5, alt: "Banner 5" },
  { id: 6, image: banner6, alt: "Banner 6" },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalTime = 5000;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, intervalTime);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full flex justify-center bg-[#F1F2F4] py-5">
      <div
        className="group relative w-[97%] sm:w-[95%] mx-auto overflow-hidden 
        rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] 
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] 
        transition-all duration-500 bg-gradient-to-b from-gray-100 to-gray-50"
      >
        {/* Slide Container */}
        <div className="relative h-[180px] sm:h-[240px] md:h-[300px] lg:h-[340px] xl:h-[360px] overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage: `url(${slides[current].image})`,
                backgroundPosition: "center",
                backgroundSize: "cover", // ensures full fit without empty space
                backgroundRepeat: "no-repeat",
              }}
            />
          </AnimatePresence>

          {/* Soft overlay for smoother look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none" />

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 px-4">
            <motion.button
              whileHover={{
                scale: 1.15,
                backgroundColor: "rgba(255,255,255,0.95)",
                boxShadow: "0 0 12px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              aria-label="Previous slide"
              className="rounded-full bg-white/80 text-black backdrop-blur-md p-2 sm:p-3 transition-all duration-300"
            >
              <FiChevronLeft size={26} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.15,
                backgroundColor: "rgba(255,255,255,0.95)",
                boxShadow: "0 0 12px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              aria-label="Next slide"
              className="rounded-full bg-white/80 text-black backdrop-blur-md p-2 sm:p-3 transition-all duration-300"
            >
              <FiChevronRight size={26} />
            </motion.button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                idx === current ? "w-7 bg-gray-900" : "w-3 bg-gray-300"
              }`}
            >
              {idx === current && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: intervalTime / 1000, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-white rounded-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
