import React from "react";
import { Link } from "react-router-dom"; // <-- use react-router-dom
import { Facebook, Twitter, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
<footer className="bg-gradient-to-tr from-white to-[#4fa6a3]/30 text-cyan-800">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid gap-8 md:grid-cols-3">
      {/* Column 1 */}
      <div>
        <h3 className="text-cyan-900 font-semibold mb-3">About Us</h3>
        <p className="text-sm sm:text-md leading-6">
          Fast and reliable AC repair services in Karachi. Licensed, insured,
          and available 24/7 to keep your home cool.
        </p>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-cyan-900 font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm sm:text-md">
          <li><a href="#services" className="hover:text-[#4fa6a3]">Services</a></li>
          <li><a href="#reviews" className="hover:text-[#1b5d67]">Reviews</a></li>
          <li><a href="#areas" className="hover:text-[#1b5d67]">Areas We Serve</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-cyan-900 font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-sm sm:text-md">
          <li>Karachi, Pakistan</li>
          <li><a href="tel:+923333474568" className="hover:text-[#1b5d67]">+92 3333474568</a></li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-10 border-t border-cyan-700 pt-6 text-sm text-center text-slate-500">
      © {new Date().getFullYear()} Ayaan Cooling Services. All rights reserved.
    </div>
  </div>
</footer>

  );
};

export default Footer;
