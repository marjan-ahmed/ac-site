import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "./ui/separator";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled ? "bg-white/80 shadow-md" : "bg-white/40"
      }`}
    >
      {/* Header content */}
      <div className="relative z-10 mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-cyan-800">
          ACS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["Home", "Services", "Reviews", "Areas"].map((item) => (
            <motion.a
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="px-2 py-2 rounded-lg border border-transparent transition-all duration-200"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(14,116,144,0.08)", // subtle cyan hover
                borderColor: "rgba(14,116,144,0.3)",
                color: "#0E7490",
              }}
              transition={{ type: "tween", duration: 0.15 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex">
          <Button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 text-sm">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt3 size={22} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-down Menu */}
            <motion.div
              className="fixed top-0 left-0 w-full backdrop-blur-2xl bg-white shadow-lg z-50 p-6 flex flex-col"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="self-end mb-6 text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                <HiX size={24} />
              </button>

              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-3 text-gray-700 font-medium">
                {["Home", "Services", "Reviews", "Areas"].map((item) => (
                  <React.Fragment key={item}>
                    <a
                      href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                    <Separator className="w-full bg-gray-200" />
                  </React.Fragment>
                ))}
              </nav>

              {/* CTA Button */}
              <Button className="bg-green-600 hover:bg-green-700 text-white mt-6 py-2 px-4 text-sm">
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
