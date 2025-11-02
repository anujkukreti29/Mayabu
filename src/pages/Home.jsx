import React from 'react'
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import BuySell from "../components/BuySell";
import TrendingDeals from "../components/TrendingDeals";
import WhyMayabu from "../components/WhyMayabu";
import PriceDrop from "../components/PriceDrop";

const sectionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
    <div className="bg-[#F1F2F4]">
    <Navbar />
    <CategoriesBar />
    <BannerSlider />
    <BuySell />
<motion.div 
  variants={sectionVariants} 
  className="mt-10 w-[97%] sm:w-[95%] mx-auto rounded-2xl border border-gray-200 shadow-md p-6 bg-white"
>
  <TrendingDeals />
</motion.div>

<motion.div 
  variants={sectionVariants} 
  className="mt-10 w-[97%] sm:w-[95%] mx-auto rounded-2xl border border-gray-200 shadow-md p-6 bg-white"
>
  <PriceDrop />
</motion.div>

    <WhyMayabu  />
    <Footer />
    </div>
    </>
  )
}

export default Home