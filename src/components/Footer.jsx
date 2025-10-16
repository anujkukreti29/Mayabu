import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setValid(true);
      setSubmitted(true);
      setEmail("");
    } else {
      setValid(false);
      setSubmitted(false);
    }
  };

  return (
    <footer className="w-full mx-auto mt-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-300 rounded-3xl shadow-xl border border-gray-800 overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 px-6 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand Info */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-2xl font-extrabold text-white tracking-wide">Mayabu</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Mayabu is your trusted resale and price comparison platform — bridging
            technology, transparency, and trust.
          </p>
          <div className="flex space-x-4 mt-3">
            {[FiFacebook, FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Sell Device", "Categories", "Blog", "FAQs", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FiMail className="text-blue-400" />
              <a href="mailto:support@mayabu.com" className="hover:text-blue-400">
                support@mayabu.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-blue-400" />
              <a href="tel:+919876543210" className="hover:text-blue-400">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-blue-400" />
              <span>Gurugram, Haryana, India</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates about new offers and the latest devices.
          </p>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none ${
                valid ? "border border-gray-300" : "border-2 border-red-500"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!valid}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-2 py-2 rounded-md shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </form>
          {!valid && (
            <p className="text-red-500 mt-1 text-sm">Enter a valid email address.</p>
          )}
          {submitted && (
            <p className="text-green-400 mt-1 text-sm">Thank you for subscribing!</p>
          )}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-800"></div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-5 text-xs sm:text-sm text-gray-500 bg-gray-950"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-medium">Mayabu</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
