import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-3 mt-3 text-gray-700 font-medium">
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact</a>
                <Button className="bg-green-600 hover:bg-green-700 text-white mt-3 py-2 px-4 text-sm">
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
