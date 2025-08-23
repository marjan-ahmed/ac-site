import React from "react";
import { motion } from "framer-motion";
import { Phone, Wrench, Clock, ShieldCheck, Star, ThermometerSnowflake } from "lucide-react"; 
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Area from "./components/Area";


function Home() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="relative overflow-hidden">

       

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                Licensed • Insured • 24/7 Support
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Fast, Reliable <span className="text-[#46A3B2] font-extrabold">AC Repair</span> in Karachi
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Beat the heat with same‑day diagnostics and repairs. Up‑front pricing, certified technicians,
                and a comfort guarantee—so your home stays cool when it matters most.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-sm bg-[#46A3B2] px-5 py-3 text-md text-white font-semibold shadow-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  View Services
                </a>
                <a
                  href="tel:+92XXXXXXXXXX"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-sky-100 to-cyan-100 blur-2xl" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                  {/* Replace the img src with your asset */}
                  <img
                    src="/animated-ac-image.png"
                    alt="Technician repairing an air conditioner"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />

                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 text-sm shadow-lg ring-1 ring-slate-200 backdrop-blur">
                    <ShieldCheck className="h-4 w-4 text-sky-600" /> Comfort Guarantee
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Services />
      <Reviews />
      <Area />
    </React.Fragment>
  );
}

export default Home;