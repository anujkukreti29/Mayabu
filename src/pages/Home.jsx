import React from 'react'
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import CategoriesBar from "../components/CategoriesBar";
import Footer from "../components/Footer";
import BuySell from "../components/BuySell"
import TrendingDeals from "../components/TrendingDeals"
import WhyMayabu from "../components/WhyMayabu";
import PriceDrop from "../components/PriceDrop"

const Home = () => {
  return (
    <>
    <div className="bg-[#F1F2F4]">
    <Navbar />
    <CategoriesBar />
    <BannerSlider />
    <BuySell />
    <TrendingDeals />
    <PriceDrop />
    <WhyMayabu  />
    <Footer />
    </div>
    </>
  )
}

export default Home