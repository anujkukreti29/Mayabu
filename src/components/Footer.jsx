import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import LogoImg from "../assets/images/logo_dark.png"; // Adjust path if needed

const footerVariants = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const iconVariants = {
  rest: { scale: 1, opacity: 0.85 },
  hover: { scale: 1.25, opacity: 1, transition: { type: "spring", stiffness: 280 } },
};

const quickLinks = [
  { label: "About Mayabu", href: "#" },
  { label: "Support", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Compare Devices", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blog", href: "#" },
];

const socialLinks = [
  { Icon: FaTwitter, href: "https://twitter.com" },
  { Icon: FaLinkedin, href: "https://linkedin.com" },
  { Icon: FaGithub, href: "https://github.com" },
  { Icon: FaInstagram, href: "https://instagram.com" },
];

// Form animation variants for open/close with height and opacity
const formVariants = {
  closed: { opacity: 0, height: 0, overflow: "hidden", transition: { duration: 0.3 } },
  open: {
    opacity: 1,
    height: "auto",
    overflow: "visible",
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.footer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={footerVariants}
        className="relative z-20 w-full py-16 px-8 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden rounded-t-3xl shadow-lg"
        style={{ minHeight: 280 }} // Fix footer height to avoid shifts
      >
        {/* Background accent */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.12 }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-28 -left-24 w-[420px] h-[360px] rounded-full bg-gradient-to-br from-indigo-700 via-blue-900 to-indigo-900 opacity-20 pointer-events-none blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14 items-start">
          {/* Left Section: Logo & Brand Text with Social Icons */}
          <div className="flex w-full md:w-1/3 select-none gap-5">
            <motion.div
              style={{ scale: 1.2 }}
              aria-label="Mayabu logo"
              role="img"
              className="cursor-default"
              animate={{ scale: [1.2, 1.25, 1.2] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              whileHover={{ scale: 1.3, transition: { type: "spring", stiffness: 120 } }}
            >
              <img
                src={LogoImg}
                alt="Mayabu Logo"
                className="w-16 h-16 object-contain"
                draggable={false}
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-orange-400 leading-none">
                  Mayabu
                </h1>
                <p className="mt-2 max-w-xs text-sm font-light text-gray-400 leading-relaxed">
                  Your trusted platform to seamlessly compare, buy, and sell devices with
                  transparency and confidence.
                </p>
              </div>
              <div className="flex mt-4 space-x-6">
                {socialLinks.map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={iconVariants}
                    aria-label={`Follow Mayabu on ${Icon.displayName || "Social"}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Icon size={26} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Footer navigation"
            className="w-full md:w-1/3 grid grid-cols-2 sm:grid-cols-3 gap-6 font-medium text-gray-400"
          >
            {quickLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm transition-colors duration-200 hover:text-blue-400 inline-block"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right Section: Button + Form container */}
          <div className="w-full md:w-1/3 flex flex-col justify-start items-end relative">
            {/* Button to open form when closed */}
            <AnimatePresence initial={false} mode="wait">
              {!isFormOpen && (
                <motion.button
                  key="helpButton"
                  onClick={() => setIsFormOpen(true)}
                  whileHover={{ scale: 1.07, backgroundColor: "#2563EB" }}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300 cursor-pointer select-none"
                  aria-label="Help us improve"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <HiOutlineMail className="text-lg" />
                  Help Us Improve
                </motion.button>
              )}

              {/* Animated Form container */}
              {isFormOpen && (
                <motion.div
                  key="helpForm"
                  variants={formVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="w-full max-w-sm bg-gray-800 rounded-lg p-5 shadow-lg text-gray-300"
                  style={{ originY: 0 }}
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thank you for your feedback!");
                      setIsFormOpen(false);
                    }}
                    className="flex flex-col gap-3"
                  >
                    <h4 className="text-lg font-semibold text-orange-400 mb-3 text-center">
                      Help Us Improve
                    </h4>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-400 transition-colors text-gray-200"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-400 transition-colors text-gray-200"
                    />
                    <textarea
                      name="feedback"
                      placeholder="Your feedback"
                      rows={3}
                      required
                      className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-400 transition-colors text-gray-200 resize-none"
                    />

                    <div className="flex justify-end gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition-colors font-semibold text-sm text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 text-xs select-none">
          &copy; 2025 Mayabu. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
}
