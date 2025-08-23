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
      setScrolled(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 backdrop-blur-xl ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/10"
      }`}
    >
      {/* Optional decorative background shapes */}
      {!scrolled && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
          <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-sky-100 blur-3xl opacity-70" />
          <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-cyan-100 blur-3xl opacity-70" />
        </div>
      )}

      {/* Header content */}
      <div className="relative z-10 mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <a href="/" className="text-2xl font-bold text-cyan-800">
          ACS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#areas">Areas</a>
        </nav>

        {/* CTA */}
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
            className="bg-[#51AEBC]"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt3 size={22} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in menu */}
            {/* Slide-down menu from top */}
<motion.div
      className="fixed top-0 left-0 w-full backdrop-blur-3xl bg-cyan-50 shadow-lg z-50 p-6 flex flex-col"
  initial={{ y: "-100%" }}      // 👈 start off-screen at the top
  animate={{ y: 0 }}            // 👈 slide down
  exit={{ y: "-100%" }}         // 👈 slide back up on close
  transition={{ type: "tween", duration: 0.3 }}
>
  {/* Close button */}
  <button
    className="self-end mb-6 text-gray-600"
    onClick={() => setMenuOpen(false)}
  >
    <HiX size={24} />
  </button>

  {/* Nav links */}
  <nav className="flex flex-col items-center gap-2.5 text-gray-700 font-normal">
     <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <Separator className="w-full bg-[#9cdae4]" />
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <Separator className="w-full bg-[#9cdae4]" />
        <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        <Separator className="w-full bg-[#9cdae4]" />
        <a href="#areas" onClick={() => setMenuOpen(false)}>Areas</a>
  </nav>

  {/* CTA button */}
  <Button variant={'outline'} className="bg-[#51AEBC] text-white mt-6 py-2 px-4 text-sm">
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
