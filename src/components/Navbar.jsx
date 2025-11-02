import React, { useState, useEffect, memo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import {
  FiHeart, FiBell, FiUser, FiSearch, FiMenu, FiX, FiHome,
  FiGrid, FiDollarSign, FiSettings,
} from "react-icons/fi";
import logo from "../assets/images/logo.png";

const trending = ["iPhone 15", "AirPods", "Smart TV", "OnePlus", "Samsung"];
const mobileMenuLinks = [
  { icon: FiHome, label: "Home", href: "/" },
  { icon: FiGrid, label: "Categories", href: "/categories" },
  { icon: FiDollarSign, label: "Deals", href: "/deals" },
  { icon: FiHeart, label: "Wishlist", href: "/wishlist" },
  { icon: FiBell, label: "Updates", href: "/updates" },
  { icon: FiUser, label: "Profile", href: "/profile" },
  { icon: FiSettings, label: "Settings", href: "/settings" },
];

const COMMON_FOCUS = "focus:outline-none focus:ring-0 focus:border-none";

const DesktopSearch = memo(({ query, setQuery, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="hidden flex-1 justify-center px-4 sm:flex"
    role="search"
  >
    <div className="relative w-full max-w-3xl">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full rounded-full border border-gray-200 bg-[#F6F7F9] py-3 pl-5 pr-12 text-base shadow-sm hover:border-blue-200 focus:border-none focus:ring-0 ${COMMON_FOCUS}`}
      />
      <button
        type="submit"
        aria-label="Search"
        className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-500 hover:text-blue-600 transition-all duration-200 ${COMMON_FOCUS}`}
      >
        <FiSearch size={22} />
      </button>
    </div>
  </form>
));
DesktopSearch.displayName = "DesktopSearch";

const MobileMenu = memo(({ onClose }) => (
  <motion.aside
    key="menu"
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    role="menu"
    aria-label="Mobile menu"
    className="fixed right-0 top-20 z-50 h-[calc(100vh-80px)] w-64 overflow-y-auto bg-gray-900 p-6 shadow-lg sm:hidden"
  >
    <ul className="space-y-2">
      {mobileMenuLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-gray-100 transition-all duration-200 hover:bg-gray-800 hover:text-blue-400"
          >
            <link.icon size={20} />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </motion.aside>
));
MobileMenu.displayName = "MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (query.trim()) alert(`Searching for: ${query}`);
    },
    [query]
  );

  return (
    <nav
      className={`sticky top-0 z-50 flex h-20 items-center justify-between px-4 sm:px-8 transition-shadow ${
        scrolled ? "shadow" : ""
      } bg-white`}
    >
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img src={logo} alt="Mayabu logo" className="h-12 w-auto sm:h-10 md:h-12" />
        </a>
      </div>
      {/* Desktop search */}
      <DesktopSearch query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      {/* Mobile search bar */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex items-center sm:hidden ml-4"
        role="search"
      >
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-[#F6F7F9] py-2 pl-4 pr-10 text-base shadow-sm focus:border-blue-200 focus:ring-0"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:text-blue-600 transition-all duration-200"
          >
            <FiSearch size={20} />
          </button>
        </div>
      </form>
      {/* Desktop icons */}
      <div className="hidden items-center gap-2 sm:flex">
        <Tippy content="Wishlist" animation="scale" placement="bottom">
          <a
            href="/wishlist"
            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
          >
            <FiHeart className="text-xl" />
            <span className="hidden md:inline">Wishlist</span>
          </a>
        </Tippy>
        <Tippy content="Updates" animation="scale" placement="bottom">
          <a
            href="/updates"
            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
          >
            <FiBell className="text-xl" />
            <span className="hidden md:inline">Updates</span>
          </a>
        </Tippy>
        <div className="mx-3 hidden h-6 border-l border-gray-200 md:block" />
        <Tippy content="Profile" animation="scale" placement="bottom">
          <a
            href="/profile"
            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:scale-105 hover:bg-blue-50 hover:text-blue-600"
          >
            <FiUser className="text-xl" />
            <span className="hidden md:inline">Profile</span>
          </a>
        </Tippy>
      </div>
      {/* Mobile menu button */}
      <div className="flex items-center gap-4 sm:hidden ml-4">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((p) => !p)}
          className="rounded-full p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
